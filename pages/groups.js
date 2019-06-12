import groups from '../data/groups';

function groupBy(arr, key) {
  return arr.reduce((acc, val) => {
    return {
      ...acc,
      [val[key]]: [...(acc[val[key]] || []), val]
    };
  }, {});
}

const colours = ['hotpink', 'white', 'limegreen'];

export default () => {
  const groupedGroups = groupBy(groups, 'status');
  return (
    <ul style={{ display: 'flex', listStyle: 'none', padding: 0, margin: 0 }}>
      {Object.keys(groupedGroups).map((status, i) => (
        <li
          key={status}
          style={{ flexGrow: 1, background: colours[i], padding: '10px' }}
        >
          <h2>{status}</h2>
          <ul>
            {groupedGroups[status].map(group => (
              <li
                key={group.name}
                style={{ background: 'rgba(255, 255, 255, 0.1)' }}
              >
                <h3>{group.name}</h3>
                <p>{group.when}</p>
                <p>{group.status}</p>
                {group.link && (
                  <p>
                    <a href={group.link}>👀</a>
                  </p>
                )}
                <ul>
                  {group.who.map(person => (
                    <li key={person}>{person}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};
