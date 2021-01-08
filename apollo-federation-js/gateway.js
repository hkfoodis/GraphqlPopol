const { ApolloServer } = require("apollo-server");
const { ApolloGateway } = require("@apollo/gateway");

const gateway = new ApolloGateway({
    serviceList: [
       { name: "restaurant-service", url: "http://ec2-15-165-93-6.ap-northeast-2.compute.amazonaws.com:8081/graphql"},
       { name: "menu-service", url: "http://ec2-3-35-208-154.ap-northeast-2.compute.amazonaws.com:8082/graphql"},
       { name: "kind-service", url: "http://ec2-15-165-76-41.ap-northeast-2.compute.amazonaws.com:8083/graphql"}
    ],

    // Experimental: Enabling this enables the query plan view in Playground.
    __exposeQueryPlanExperimental: false,
});

(async () => {
    const server = new ApolloServer({
        gateway,

        // Apollo Graph Manager (previously known as Apollo Engine)
        // When enabled and an `ENGINE_API_KEY` is set in the environment,
        // provides metrics, schema management and trace reporting.
        engine: false,

        // Subscriptions are unsupported but planned for a future Gateway version.
        subscriptions: false,
    });

    server.listen().then(({ url }) => {
        console.log(`🚀 Server ready at ${url}`);
    });
})();