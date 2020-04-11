import { useState } from "react";

const useAsync = asyncFunction => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  // thay the axios
  function execute() {
    setLoading(true);
    setResult(null);
    setError(null);
    asyncFunction
      .apply(this, arguments)
      .then(res => setResult(res))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }

  return [{ loading, result, error }, execute];
};

export default useAsync;