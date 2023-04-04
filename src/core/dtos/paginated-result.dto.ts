export interface PaginatedResultDto<T> {
  /** Data array. */
  readonly data: T[];

  /** Page number. */
  readonly page: number;

  /** Page limit. */
  readonly limit: number;

  /** Amount of data.  */
  readonly totalCount: number;
}
