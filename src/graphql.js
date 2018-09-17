export const ListGrudges = `
<<<<<<< HEAD
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
=======
  query ListGrudges {
    listGrudges {
      items {
        id
        person
        deed
        avenged
      }
    }
  }
`;

export const CreateGrudge = `
  mutation CreateGrudge(
    $id: ID!
    $person: String!
    $deed: String!
    $avenged: Boolean!
  ) {
    createGrudge(input: {
      id: $id,
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

export const SubscribeToNewGrudge = `
  subscription SubscribeToNewGrudges {
    onCreateGrudge {
      id
      person
      deed
      avenged
    }
  }
`;
>>>>>>> 2deb9c1abfc4f227f293d398c10f1572d46700ca
