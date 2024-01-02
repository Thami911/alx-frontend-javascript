export default function createIteratorObject(report) {
  const emps = [];
  // eslint-disable-next-line
  for (const dep of Object.keys(report.allEmployees)) {
    // eslint-disable-next-line
    for (const emply of report.allEmployees[depart]) {
      emps.push(emply);
    }
  }

  return emps;
}

