export type TokenGeneratorProps = {
  id: string
  secret: string
}

export interface TokenGenerator {
  generate: (data: TokenGeneratorProps) => Promise<string>
}
