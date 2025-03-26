// function to convert YYYY-MM-DD to "days, weeks, months, years" ago
export function timeAgo(date){
    const now = new Date();
    if (now < new Date(date)){
      return "in the future...";
    }
    const diffTime = Math.abs(now - new Date(date));
    const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(days / 7);
    const months = Math.floor(weeks / 4.35); // Approximate number of weeks in a month
    const years = Math.floor(months / 12);

    if (years > 0) {
      return `${years} year${years > 1 ? 's' : ''} ago`;
    } else if (months > 0) {
      return `${months} month${months > 1 ? 's' : ''} ago`;
    } else if (weeks > 0) {
      return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
    } else if (days > 0) {
      return `${days} day${days > 1 ? 's' : ''} ago`;
    } else {
      return "today";
    }
  };