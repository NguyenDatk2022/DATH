import * as ActionType from "./constants";
import axios from "axios";

export const actDanhSachDonHangRequest = () => {
    return {
        type: ActionType.DANH_SACH_DON_HANG_REQUEST,
    };
};

export const actDanhSachDonHangSuccess = (data) => {
    console.log(data.data);
    return {
        type: ActionType.DANH_SACH_DON_HANG_SUCCESS,
        payload: data.data,
    };
};

export const actDanhSachDonHangFail = (data) => {
    return {
        type: ActionType.DANH_SACH_DON_HANG_FAIL,
        payload: data.data,
    };
};

export const actFetchDanhSachDonHang = () => {
    //Gọi axios trong action
    return (dispatch) => {
        dispatch(actDanhSachDonHangRequest());
        axios({
            url: "http://localhost:3000/read-list-order",
            method: "GET",
        })
            .then((result) => {
                //Success
                dispatch(actDanhSachDonHangSuccess(result.data));
            })
            .catch((err) => {
                //Fail
                dispatch(actDanhSachDonHangFail(err));
            })
    }
}

export const actSearch = (keyword) => {
    return {
        type: ActionType.SEARCH,
        payload: keyword,
    }
}

export const actEdit = (donHang) => {
    return {
        type: ActionType.EDIT,
        payload: donHang,
    }
}

export const actSubmit = (donHang) => {
    return {
        type: ActionType.SUBMIT,
        payload: donHang,
    }
    
}

