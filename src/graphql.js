export const ListGrudges = `
    query ListGrudges {
        listGrudges {
        items {
            id
            person
            deed
            avenged
        }
        nextToken
        }
    }
`;

export const CreateGrudge = `
    mutation CreateGrudge (
       $person: String!
       $deed: String!
       $avenged: Boolean!
    ) {
        createGrudge(input: {
            person: $person,
            deed: $deed,
            avenged: $avenged
        }) {
            id
            person
            deed
            avenged
        }
    }
`;

export const SubscribeToNewGrudges = `
    subscription SubscribeToNewGrudges {
        onCreateGrudge {
            id
            person
            deed
            avenged
        }
    }
`