export enum FilterOperator {
  GreaterThan = '>',
  LessThan = '<',
  GreaterThanOrEqualTo = '>=',
  LessThanOrEqualTo = '<=',
  Equals = '=',
  EqualsCaseInsensitive = '==*',
  NotEquals = '!=',
  NotEqualsCaseInsensitive = '!=*',
  Contains = '@=',
  ContainsCaseInsensitive = '@=*',
  DoesNotContain = '!@=',
  DoesNotContainCaseInsensitive = '!@=*',
  StartsWith = '_=',
  StartsWithCaseInsensitive = '_=*',
  DoesNotStartWith = '!_=',
  DoesNotStartWithCaseInsensitive = '!_=*'
}