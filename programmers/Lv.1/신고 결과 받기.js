function solution(id_list, report, k) {
  const reportedBy = {};
  const mailedCounts = {};

  for (let r of report) {
    const [reporter, reported] = r.split(' ');

    // init
    if (!reportedBy[reported]) reportedBy[reported] = new Set();
    
    // report
    reportedBy[reported].add(reporter);
  }

  Object.entries(reportedBy).forEach(([reported, reporters]) => {
    if (reporters.size >= k) {
      // mailing
      for (let reporter of reporters) {
        mailedCounts[reporter] = (mailedCounts[reporter] || 0) + 1;
      }
    }
  })
  
  return id_list.map((id) => mailedCounts[id] ?? 0);
}
