import { useState, useEffect } from 'react';
import SpendsAPI from '../api/spendsAPI';

function useSpends() {
    const [useSpendList, setUseSpendList] = useState(null);


    useEffect(() => {
        const fetchSpends = async () => {
            try {
                const spendsAPI = new SpendsAPI();
                const spendTypes = await spendsAPI.getAllSpends();
                setUseSpendList(spendTypes);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchSpends();
    }, []);

    const getSpendTypeById = async (id) => {
        return await spendTypeAPI.getSpendTypeByID(id);
    };

    // const deleteSpendTypeById = async (id) => {
    //     return await spendTypeAPI.deleteSpendTypeByID(id);
    // };

    // const addSpendType = async (spendTypeData) => {
    //     return await spendTypeAPI.addSpendType(spendTypeData);
    // };

    // Cung cấp các methods và state thông qua hook
    return {
        useSpendList,
        getSpendTypeById,
        // deleteSpendTypeById,
        // addSpendType,
        // setSpendrTypes // cung cấp phương thức này để có thể cập nhật state từ UI
    };
}

export default useSpends;
