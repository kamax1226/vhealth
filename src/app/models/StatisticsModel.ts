export interface StatisticsModel {
    "startDate": string,
    "endDate": string,
    "dailyStatistics": [
        {
            "date": string,
            "total": number,
            "target": number,
            "ageGroupDistribution": [
                {
                    "ageGroup": string,
                    "count": number
                }
            ],
            "genderDistribution": [
                {
                    "gender": string,
                    "count": number
                }
            ],
            "categoryDistribution": [
                {
                    "category": string,
                    "count": number
                }
            ],
            "suburbDistribution": [
                {
                    "suburb": string,
                    "count": number
                }
            ],
            "cityDistribution": [
                {
                    "city": string,
                    "count": number
                }
            ],
            "municipalityDistribution": [
                {
                    "municipality": string,
                    "count": number
                }
            ],
            "provinceDistribution": [
                {
                    "province": string,
                    "count": number
                }
            ],
            "facilityDistribution": [
                {
                    "facility": string,
                    "count": number
                }
            ],
            "branchDistribution": [
                {
                    "branch": string,
                    "count": number
                }
            ]
        }
    ]
}
