const amountFormatter = new Intl.NumberFormat('en-LK', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

export const formatCurrency = (value) => `Rs. ${amountFormatter.format(Number(value || 0))}`;
