import './index.css';

const getApi = async () => {
  const res = await fetch('https://api.tvmaze.com/shows');
  const data = await res.json();
};

getApi();
