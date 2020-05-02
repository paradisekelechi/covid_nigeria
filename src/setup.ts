import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    uri: 'https://covid-19-tracker-nigeria.herokuapp.com',
    fetchOptions: {
        fetchOptions: {
            mode: 'no-cors'
        }
    },
    headers: {
        'Access-Control-Allow-Origin': '*',
    }
});

export default client;