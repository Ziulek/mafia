// script.js

// Define the GraphQL mutation as a string
const mutation = `
    mutation createGame($hostId: String!) {
        createGame(hostId: $hostId) {
            gameCode
            hostId
            stage
            winner
            gameRules {
                additionalRoles
                numberOfMafia
                showRolesAfterDeath
            }
            players {
                character
                role
                nickname
                isDead
                id
            }
        }
    }
`;

// Set up the variables required by the mutation
const variables = {
  hostId: "12345",
};

// Define the GraphQL endpoint and API key
const graphqlEndpoint =
  "https://2m3u7nxlhzbmvk4gzkve6cuxd4.appsync-api.eu-central-1.amazonaws.com/graphql";
const API_KEY = "da2-bsiqyvwd5bgmppv632neuwch2a";

// Build the request body
const body = JSON.stringify({
  query: mutation,
  variables: variables,
});

// Make the POST request using Maestro's HTTP API
const response = http.post(graphqlEndpoint, {
  headers: {
    "Content-Type": "application/json",
    "x-api-key": API_KEY,
  },
  body: body,
});

const gameCode = json(response.body).data.createGame.gameCode;

output.gameCodeChar1 = gameCode.charAt(0);
output.gameCodeChar2 = gameCode.charAt(1);
output.gameCodeChar3 = gameCode.charAt(2);
output.gameCodeChar4 = gameCode.charAt(3);
output.gameCodeChar5 = gameCode.charAt(4);
output.gameCodeChar6 = gameCode.charAt(5);

// output.gameCode = gameCode;

console.log(gameCode);
