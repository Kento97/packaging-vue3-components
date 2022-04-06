export type CitiesType = Record<string, Array<{
    id: number,
    spell: string,
    name: string
}>>

export type province_city_type = Record<string, Array<{
    name: string,
    data: string[]
    id?: string
}>>
