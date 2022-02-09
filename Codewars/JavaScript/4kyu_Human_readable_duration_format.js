function formatDuration (seconds) {
  function formatDuration (seconds) {
    if (seconds == 0) return "now";
    const t = [Math.floor(seconds / 31536000), Math.floor(seconds % 31536000 / 86400), Math.floor(seconds % 86400 / 3600), Math.floor(seconds % 3600 / 60), Math.floor(seconds % 60)];
    const unit = ["year", "day", "hour", "minute", "second"];
    return t.reduce((str, time, index) => str += time != 0 ? time + " " + unit[index] + (time != 1 ? "s" : "") + ", " : "", "").replace(/\, (?=[^, ]*$)/, "").replace(/\,(?=[^,]*$)/, " and");
  }
}

console.log(formatDuration(3662));