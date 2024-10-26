exports.getVendors = (req, res) => {
  const vendors = [
      { id: 1, name: 'Food Truck 1', type: 'Asian' },
      { id: 2, name: 'Food Truck 2', type: 'Mexican' }
  ];
  
  res.json(vendors);
};
