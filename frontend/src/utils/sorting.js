export const handleSort = (data, key, sortConfig, setSortConfig, setData) => {
  console.log(data,key,sortConfig,setSortConfig,setData)
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
  
    const sortedData = [...data].sort((a, b) => {
      if (key === 'id') {
        return direction === 'asc' ? a[key] - b[key] : b[key] - a[key];
      }
      return a[key]?.localeCompare(b[key]) * (direction === 'asc' ? 1 : -1);
    });
  
    setData(sortedData);
    setSortConfig({ key, direction });
  };
