import React from 'react'
import { Auth0Provider } from '@auth0/auth0-react'

interface Props {
    children: React.ReactNode;
}

const Auth0ProviderWithHistory = ({ children }: Props) => {
    const domain = process.env.REACT_APP_AUTH0_DOMAIN;
    const clientId  = process.env.REACT_APP_AUTH0_CLIENT_ID;
    // const history = useHistory()
    // const onRedirectCallback = (appState) => {
    //     history.push(appState?.returnTo || window.location.origin)
    // }
    return (
        <Auth0Provider
        domain='dev-8j1ztg6y.us.auth0.com'
        clientId='EiEggNwGhnQx7OSkSjaW8laXRcX6Neo4'
        redirectUri={window.location.origin}
        // onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
        
    )
    }
 
 export default Auth0ProviderWithHistory