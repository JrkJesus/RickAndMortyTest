import { Subject, from, forkJoin, of } from "rxjs";
import { switchMap, mergeMap, map, catchError } from "rxjs/operators";
import axios from "axios";

export const createApiService = () => {
  const createDataService = (endpoint, defaultMapper = (data) => data) => {
    const action$ = new Subject();

    const data$ = action$.pipe(
      switchMap(({ type, params, fieldPath, dependencyMapper }) => {
        const mainUrl = `https://rickandmortyapi.com/api/${endpoint}`;

        return from(axios.get(mainUrl, { params })).pipe(
          map((response) => defaultMapper(response.data.results)),
          mergeMap((mappedData) => {
            if (type === "FETCH") return of(mappedData);

            const dependenciesUrls = mappedData
              .map((item) => item[fieldPath])
              .filter((url) => url);

            const dependencies$ = dependenciesUrls.map((url) =>
              from(axios.get(url)).pipe(
                map((response) =>
                  dependencyMapper
                    ? dependencyMapper(response.data)
                    : response.data
                ),
                catchError(() => of(null))
              )
            );

            return forkJoin(dependencies$).pipe(
              map((dependenciesData) =>
                mappedData.map((item, index) => ({
                  ...item,
                  [fieldPath]: dependenciesData[index],
                }))
              )
            );
          })
        );
      }),
      catchError((error) => {
        console.error("API Error:", error);
        return of([]);
      })
    );

    return {
      fetch: (params = {}) => action$.next({ type: "FETCH", params }),
      fetchWithDependency: (fieldPath, params = {}, dependencyMapper) =>
        action$.next({
          type: "FETCH_WITH_DEPENDENCY",
          params,
          fieldPath,
          dependencyMapper,
        }),
      data$,
    };
  };

  return { createDataService };
};
