import { VSModel } from "app/models/VSModel";
import axiosInstance from "setup/axios/SetupAxios";

interface requestBodyTypes {
    "userId": string,
    "appointmentDateTime": string,
    "creationDateTime": string,
    "onSite": boolean
}

const request = {
    getVSs: async (lguId: string, vcId: string, limit: number, page: number, accessToken: string): Promise<VSModel[]> => {
        let config = {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            params: {
                limit, page
            },
        };

        try {
            const response: VSModel[] = await axiosInstance.get(`local-government-units/${lguId}/vaccination-centers/${vcId}/appointments`, config);
            return response;
        } catch (error) {
            let errorMessage = 'Failed to do something exceptional';
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            throw new Error(errorMessage);
        }
    },
    createVS: async (lguId: string, vcId: string, requestBody: requestBodyTypes, idToken: string): Promise<VSModel> => {
        let config = {
            headers: {
                'Authorization': `Bearer ${idToken}`
            },
        };

        try {
            const response: VSModel = await axiosInstance.post(`local-government-units/${lguId}/vaccination-centers/${vcId}/appointments`, requestBody, config);
            return response;
        } catch (error) {
            let errorMessage = 'Failed to do something exceptional';
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            throw new Error(errorMessage);
        }
    },
    getVS: async (lguId: string, vcId: string, appointmentId: string, idToken: string): Promise<VSModel> => {
        let config = {
            headers: {
                'Authorization': `Bearer ${idToken}`
            },
        };

        try {
            const response: VSModel = await axiosInstance.get(`local-government-units/${lguId}/vaccination-centers/${vcId}/appointments/${appointmentId}`, config);
            return response;
        } catch (error) {
            let errorMessage = 'Failed to do something exceptional';
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            throw new Error(errorMessage);
        }
    },
    updateVS: async (lguId: string, vcId: string, appointmentId: string, requestBody: requestBodyTypes, idToken: string): Promise<VSModel> => {
        let config = {
            headers: {
                'Authorization': `Bearer ${idToken}`
            },
        };

        try {
            const response: VSModel = await axiosInstance.patch(`local-government-units/${lguId}/vaccination-centers/${vcId}/appointments/${appointmentId}`, requestBody, config);
            return response;
        } catch (error) {
            let errorMessage = 'Failed to do something exceptional';
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            throw new Error(errorMessage);
        }
    },
    deleteVS: async (lguId: string, vcId: string, appointmentId: string, idToken: string): Promise<VSModel> => {
        let config = {
            headers: {
                'Authorization': `Bearer ${idToken}`
            },
        };

        try {
            const response: VSModel = await axiosInstance.delete(`local-government-units/${lguId}/vaccination-centers/${vcId}/appointments/${appointmentId}`, config);
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
