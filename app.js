const u = require('underscore');

let input = [
    {
        "universe": "u1",
        "realm": "r1",
        "serial": "serial1",
        "test": "test1"
    },
    {
        "universe": "u1",
        "realm": "r1",
        "serial": "serial2",
        "test": "test2"
    },
    {
        "universe": "u1",
        "realm": "r2",
        "serial": "serial3",
        "test": "test3"
    },
    {
        "universe": "u1",
        "realm": "r2",
        "serial": "serial4",
        "test": "test4"
    },
    {
        "universe": "u1",
        "realm": "r3",
        "serial": "serial5",
        "test": "test5"
    },
    {
        "universe": "u2",
        "realm": "r8",
        "serial": "serial9",
        "test": "test00"
    }
];

let order = ["universe", "realm", "serial"];

let nestedGroup = (list, order) => {

    if (u.isEmpty(order)) return [];

    let groups = u.groupBy(list, u.first(order));


    return u.map(groups, (children, key) => {
        let group = {
            current :u.first(order),
            id :key,
            children: nestedGroup(children, u.rest(order))
        };

        return u.isEmpty(group.children) ? u.omit(group, 'children') : group;
    });
};

let groups = nestedGroup(input, order);



console.log(JSON.stringify(groups, null, 4));

