import {history} from 'umi';

const Two = () => {
  return (
    <div>
      <p>In Page Two</p>

      <div>
        <button onClick={() => history.push('/one?name=123')}>navigate to first page with full route match</button>
        <button onClick={() => history.push('/?name=123')}>navigate to first page by redirect</button>
      </div>
    </div>
  );
};

export default Two;
