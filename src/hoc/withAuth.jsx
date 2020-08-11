import React, { useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux'
import { fetchToken, tokenSelector } from 'modules/auth'
import { useAction } from 'hooks/useAction'

const withAuth = Component => ({...props}) => {
    const getToken = useCallback(
        useAction(fetchToken),
        [fetchToken],
    ), token = useSelector(tokenSelector)

    useEffect(() => {
        getToken()
    }, [getToken])

    return token ? <Component {...props} /> : <h1>Unregistered Token!</h1>;
};

export default withAuth;
