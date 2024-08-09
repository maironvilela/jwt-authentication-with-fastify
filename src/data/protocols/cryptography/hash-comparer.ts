export type HashComparerProps = {
  plainText: string
  hashText: string
}

export interface HashComparer {
  compare: (data: HashComparerProps) => Promise<boolean>
}
