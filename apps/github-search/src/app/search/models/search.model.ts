export type SearchTypes = 'repositories' | 'users';
export interface SearchParameters {
  q: string;
  sort?: string;
  type?: string;
  order?: string;
}
