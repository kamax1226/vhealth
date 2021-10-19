export interface LGUModel {
    "id": string,
    "name": string,
    "city": string,
    "manicipality": string,
    "province": string,
    "region": string,
    "administratorId": string,
    "staffIds": [
        string
    ],
    "targets": [
        {
            "id": string,
            "suburb": string,
            "count": number
        }
    ]
}
