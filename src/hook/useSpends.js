import { useState, useEffect } from 'react';
import SpendsAPI from '../api/spendsAPI';
import TimestampConverter from '../utils/timestampConverter';

function useSpends() {
    const [useSpendList, setUseSpendList] = useState(null);
    const [spend, setSpend] = useState(null);

    const spendsAPI = new SpendsAPI();


    useEffect(() => {
        const fetchSpends = async () => {
            try {
                const spendTypes = await spendsAPI.getAllSpends();
                setUseSpendList(spendTypes);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchSpends();
    }, []);

    const getSpendTypeById = async (id) => {
        return await spendsAPI.getSpendById(id);
    };

    const getSpendTypeByUserId = async (userId) => {
        const spends = await spendsAPI.getSpendByUserId(userId)
        return spends;
    };

    const getSpendByDate = async (date) => {
        const spendsAPI = new SpendsAPI();
        const spends = await spendsAPI.getAllSpends();
        const dateToCompare = TimestampConverter.convert(date).newDate;

        for (let spendItem of spends) {
            if (TimestampConverter.convert(spendItem.created_date).newDate === dateToCompare) {
                return spendItem;
            }
        }
        return null;
    };

    // const deleteSpendTypeById = async (id) => {
    //     return await spendTypeAPI.deleteSpendTypeByID(id);
    // };

    const addSpend = async (spend) => {
        const spendsAPI = new SpendsAPI();
        const newSpend = await spendsAPI.addSpend(spend)
        return newSpend;
    };
    const getSpendMax = async () => {
        const spendsAPI = new SpendsAPI();
        const spends = await spendsAPI.getAllSpends();
        return spends.length+1;
    };
    const updateSpend = async (spend) => {
        const spendsAPI = new SpendsAPI();
        const spends = await spendsAPI.updateSpend(spend);
        const spendTypes = await spendsAPI.getAllSpends();
        setUseSpendList(spendTypes);
        return spends
    }

    // Cung cấp các methods và state thông qua hook
    return {
        useSpendList,
        getSpendTypeById,
        getSpendTypeByUserId,
        getSpendByDate,
        addSpend,
        getSpendMax,
        updateSpend,
        // deleteSpendTypeById,
        // addSpendType,
        // setSpendrTypes // cung cấp phương thức này để có thể cập nhật state từ UI
    };
}

export default useSpends;
