<h2>PageTemplate</h2>
<p>PageTemplate컴포넌트는 유저 인터페이스의 전체적인 틀을 설정.</p>
<h2>TodoInput</h2>
<p>일정을 추가할때 사용하는 input컴포넌트</p>
<ul>
    <li>props를 세개 받는다.</li>
    <li>value = input값으로 설정</li>
    <li>onChange는 input 내용이 수정될때 사용하는 이벤트</li>
    <li>onInsert는 추가 버튼을 클릭했을때 실행하는 이벤트</li>
</ul>
<h2>TodoItem</h2>
<p>각 일정을 렌더링함. 클릭하면 체크되면서 줄을 긋는다. 지우기 버튼을 누르면 일정을 화면에서 제거</p>
<ul>
    <li>성능을 최적화할때 shouldComponentUpdate라이프 사이클 메서드를 사용하기때문에 class문법을 사용</li>
    <li>done 값은 해당 일정을 완료해는지 안했는지 여부</li>
    <li>children값은 일정 정보 내용</li>
    <li>onToggle은 일정 완료 상태를 껐다 켰다 하는 함수</li>
    <li>onRemove는 일정을 제거하는 함수</li>
</ul>
<h2>TodoList</h2>
<p>일정 데이터가 담긴 배열을 TodoItem 컴포넌트로 구성된 배열로 변환해서 렌더링하는 컴포넌트</p>
<ul>
    <li>데이터 배열을 컴포넌트 배열로 변환하여 렌더링 하는역할만 함</li>
</ul>


<h2>상태관리</h2>
<span>좋지않은예</span><br/>
<p>데이터 배열의 상태를 TodoList 컴포넌트에서 정의하고, TodoInput의 상태를 그 내부에 정의했다고 가정. 이경우 새 데이터를 TodoList에 넣으려면?</p>
<ul>
    <li>TodoList 컴포넌트에 데이터 생성 메서드 만들기</li>
    <li>App에서 TodoList에 ref달기</li>
    <li>TodoInput에 ref가 달린 TodoList의 데이터 생성 메서드를 props로 전달하기</li>
    <li>TodoInput의 상태를 전달받은 함수에 파라미터로 넣기</li>
</ul>

<span>좋은예</span><br/>
<p>데이터가 필요한 컴포넌트들의 상위 컴포넌트인 App에서 하는것이 좋다. App의 state에서 input 값과 데이터 배열을 정의하고, 이를 변화시키는 메서드들도 정의<br/>state값과 메서드를 props로 하위 컴포넌트에 전달해서 사용하는 것이 바람직한 흐름</p>
