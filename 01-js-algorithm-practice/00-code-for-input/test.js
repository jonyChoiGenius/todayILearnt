//////* 인풋을 입력받는 코드입니다.  *//////
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');
/*
동일 디렉토리의 input.txt파일을 인풋값으로 받습니다.
입력 유형에 따른 스켈레톤 코드는 맨 아래를 참조하세요. 
*/

////// 문제를 푸는 란입니다. answer를 정의한 후 그 아래에 답을 입력하세요.//////
function solution(input) {
    let answer = 1;
    a= b= c= 3
    a = b
    a= 1
    console.log(a)
    console.log(b)
    
    


    console.log(answer);
}
solution(input)


/* 인풋 입력 스켈레톤 코드
1. 하나의 값을 입력받을 때
const fs = require('fs');
const input = fs.readFileSync(filePath).toString().trim();


2. 공백으로 구분된 한 줄의 값들을 입력받을 때
const fs = require('fs');
const input = fs.readFileSync(filePath).toString().trim().split(" ");


3. 여러 줄의 값들을 입력받을 때
const fs = require('fs');
const input = fs.readFileSync(filePath).toString().trim().split("\n");


4. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄에 공백으로 구분된 n개의 값들을 입력받을 때
const fs = require('fs');
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split(/\s/);


5. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄부터 n개의 줄에 걸쳐 한 줄에 하나의 값을 입력받을 때
const fs = require('fs');
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");


6. 하나의 값 또는 공백으로 구분된 여러 값들을 여러 줄에 걸쳐 뒤죽박죽 섞여서 입력받을 때
  ex) n 입력 - 공백으로 구분된 n개의 값 입력 - m 입력 - 여러 줄에 걸쳐 m개의 값 입력
const fs = require('fs');
const input = fs.readFileSync(filePath).toString().trim().split(/\s/);
const n = input[0];
const n_arr = input.slice(1, n+1);
const [m, ...m_arr] = input.slice(n+1);

출처: https://overcome-the-limits.tistory.com/25 [Plus Ultra:티스토리]

*/