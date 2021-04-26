export interface Sorting {
  sort: string | null,
  order?: 'desc' | 'asc'
}
export type SortingOptions = Record<string, Sorting>;

export const defaultSort: Sorting = { sort: null };
export const sortOptions: Record<string, SortingOptions> = {
  'repositories': {
    'Best match': defaultSort,
    'Most stars': { sort: 'stars', order: 'desc' },
    'Least stars': { sort: 'stars', order: 'asc' },
    'Most forks': { sort: 'forks', order: 'desc' },
    'Least forks': { sort: 'forks', order: 'asc' },
    'Recently updated': { sort: 'updated', order: 'desc' },
    'Least recently updated': { sort: 'updated', order: 'asc' },
  },
  'users': {
    'Best match': defaultSort,
    'Most followers': { sort: 'followers', order: 'desc' },
    'Least followers': { sort: 'followers', order: 'asc' },
    'Most recently joined': { sort: 'joined', order: 'desc' },
    'Least recently joined': { sort: 'joined', order: 'asc' },
    'Most repositories': { sort: 'repositories', order: 'desc' },
    'Least repositories': { sort: 'repositories', order: 'asc' },
  }
};
