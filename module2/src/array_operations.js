const head = ([first]) => first;

const tail = ([first, ...latest]) => latest;

const init = (data) => data.slice(0, -1);

const last = (data) => data[data.length - 1];
