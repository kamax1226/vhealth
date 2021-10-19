import { VCModel } from "app/models/VCModel";
import axiosInstance from "setup/axios/SetupAxios";

interface requestBodyTypes {
    "name": string,
    "suburb": string,
    "staffIds": [
        string
    ]
};

const request = {
    createVC: async (lguId: string, requestBody: requestBodyTypes): Promise<VCModel> => {
        try {
            const response: VCModel = await axiosInstance.post(`local-government-units/${lguId}/vaccination-centers`, requestBody);
            return response;
        } catch (error) {
            let errorMessage = 'Failed to do something exceptional';
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            throw new Error(errorMessage);
        }
    },
    getVCs: async (lguId: string): Promise<VCModel[]> => {
        try {
            const response: VCModel[] = await axiosInstance.get(`local-government-units/${lguId}/vaccination-centers`, {
                params: { lguId }
            });
            return response;
        } catch (error) {
            let errorMessage = 'Failed to do something exceptional';
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            throw new Error(errorMessage);
        }
    },
    getVC: async (lguId: string, vcId: string): Promise<VCModel> => {
        try {
            const response: VCModel = await axiosInstance.get(`local-government-units/${lguId}/vaccination-centers/${vcId}`);
            return response;
        } catch (error) {
            let errorMessage = 'Failed to do something exceptional';
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            throw new Error(errorMessage);
        }
    },
    updateVC: async (lguId: string, vcId: string, requestBody: requestBodyTypes): Promise<VCModel> => {
        try {
            const response: VCModel = await axiosInstance.patch(`local-government-units/${lguId}/vaccination-centers/${vcId}`, requestBody);
            return response;
        } catch (error) {
            let errorMessage = 'Failed to do something exceptional';
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            throw new Error(errorMessage);
        }
    },
}

export default request;
