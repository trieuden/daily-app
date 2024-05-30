import { useState, useEffect } from 'react';
import SpendItemsAPI from '../api/spendItemsAPI';

function useSpendItems() {
    const [useSpendItemList, setUseSpendItemList] = useState(null);
    const [useSpendItemBySpendId, setUseSpendItemBySpendId] = useState([]);


    useEffect(() => {
        const fetchSpendItems = async () => {
            try {
                const spendItemsAPI = new SpendItemsAPI();
                const spendTypeItems = await spendItemsAPI.getAllSpendItems();
                setUseSpendItemList(spendTypeItems);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchSpendItems();
    }, []);

    const getSpendItemsBySpendId = async (spend_id) => {
        const spendItemsAPI = new SpendItemsAPI();
        const spendTypeItems = await spendItemsAPI.getAllSpendItems();
        const filteredItems = spendTypeItems.filter(spendItem => spendItem.spend_id === spend_id);
        setUseSpendItemBySpendId(filteredItems);
        return filteredItems;
    };

    const getSpendItemById = async (id) => {
        return await spendTypeAPI.getSpendItemById(id);
    };

    // const deleteSpendTypeById = async (id) => {
    //     return await spendTypeAPI.deleteSpendTypeByID(id);
    // };

    // const addSpendType = async (spendTypeData) => {
    //     return await spendTypeAPI.addSpendType(spendTypeData);
    // };

    // Cung cấp các methods và state thông qua hook
    return {
        useSpendItemList,
        getSpendItemsBySpendId,
        getSpendItemById,
        // deleteSpendTypeById,
        // addSpendType,
        // setSpendrTypes // cung cấp phương thức này để có thể cập nhật state từ UI
    };
}

export default useSpendItems;
