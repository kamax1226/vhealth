import { VTModel } from "app/models/VTModel";
import axiosInstance from "setup/axios/SetupAxios";
import { v4 } from "uuid";

interface requestBodyTypes {
    "userId": string,
    "appointmentDateTime": string,
    "creationDateTime": string,
    "onSite": boolean
}

const request = {
    getVaccines: async (accessToken: string) => {
        let config = {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'X-Correlation-ID': v4()
            },
        };

        try {
            const response = await axiosInstance.get(`/api/v1/vaccines`, config);
            return response;
        } catch (error) {
            let errorMessage = 'Failed to do something exceptional';
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            throw new Error(errorMessage);
        }
    },
    getVTs: async (lguId: string, vcId: string, limit: number, page: number, accessToken: string): Promise<VTModel[]> => {
        let config = {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'X-Correlation-ID': v4()
            },
            params: {
                limit, page
            },
        };

        try {
            const response: VTModel[] = await axiosInstance.get(`/api/v1/local-government-units/${lguId}/vaccination-centers/${vcId}/vaccine-supplies`, config);
            return response;
        } catch (error) {
            let errorMessage = 'Failed to do something exceptional';
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            throw new Error(errorMessage);
        }
    },
    createVT: async (lguId: string, vcId: string, requestBody: requestBodyTypes, idToken: string): Promise<VTModel> => {
        let config = {
            headers: {
                'Authorization': `Bearer ${idToken}`,
                'X-Correlation-ID': v4()
            },
        };

        try {
            const response: VTModel = await axiosInstance.post(`/api/v1/local-government-units/${lguId}/vaccination-centers/${vcId}/vaccine-supplies`, requestBody, config);
            return response;
        } catch (error) {
            let errorMessage = 'Failed to do something exceptional';
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            throw new Error(errorMessage);
        }
    },
    getVT: async (lguId: string, vcId: string, supplyId: string, idToken: string): Promise<VTModel> => {
        let config = {
            headers: {
                'Authorization': `Bearer ${idToken}`,
                'X-Correlation-ID': v4()
            },
        };

        try {
            const response: VTModel = await axiosInstance.get(`/api/v1/local-government-units/${lguId}/vaccination-centers/${vcId}/vaccine-supplies/${supplyId}`, config);
            return response;
        } catch (error) {
            let errorMessage = 'Failed to do something exceptional';
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            throw new Error(errorMessage);
        }
    },
    updateVS: async (lguId: string, vcId: string, supplyId: string, requestBody: requestBodyTypes, idToken: string): Promise<VTModel> => {
        let config = {
            headers: {
                'Authorization': `Bearer ${idToken}`,
                'X-Correlation-ID': v4()
            },
        };

        try {
            const response: VTModel = await axiosInstance.patch(`/api/v1/local-government-units/${lguId}/vaccination-centers/${vcId}/vaccine-supplies/${supplyId}`, requestBody, config);
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
