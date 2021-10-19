import { StatisticsModel } from "app/models/StatisticsModel";
import axiosInstance from "setup/axios/SetupAxios";
import store from "setup/redux/Store";

const {
    auth: { accessToken, idToken }
} = store.getState();

const request = {
    uploadRecords: async (lguId: string, vcId: string, formData: FormData) => {
        let config = {
            headers: {
                'Authorization': `Bearer ${idToken}`,
                'Content-Type': 'multipart/form-data'
            },
        }

        try {
            const response = await axiosInstance.put(`local-government-units/${lguId}/vaccination-centers/${vcId}/vaccination-records`, formData, config);
            return response;
        } catch (error) {
            let errorMessage = 'Failed to do something exceptional';
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            throw new Error(errorMessage);
        }
    },
    getStatistics: async (startDate: string, endDate: string): Promise<StatisticsModel> => {
        let config = {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            params: {
                startDate, endDate
            }
        };

        try {
            const response: StatisticsModel = await axiosInstance.get('statistics', config);
            return response;
        } catch (error) {
            let errorMessage = 'Failed to do something exceptional';
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            throw new Error(errorMessage);
        }
    }
}

export default request;
