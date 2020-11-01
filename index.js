//页面加载时，生成随机验证码
window.onload = function() {
  createCode(4);
};

//生成验证码的方法
function createCode(length) {
  var code = "";
  var codeLength = parseInt(length); //验证码的长度
  var checkCode = document.getElementById("checkCode");

  var codeChars = new Array(
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  );
  //循环组成验证码的字符串
  for (var i = 0; i < codeLength; i++) {
    //获取随机验证码下标
    var charNum = Math.floor(Math.random() * 62);
    //组合成指定字符验证码
    code += codeChars[charNum];
  }
  if (checkCode) {
    //为验证码区域添加样式名
    checkCode.className = "code";
    //将生成验证码赋值到显示区
    checkCode.innerHTML = code;
  }
}

//检查验证码是否正确
function validateCode() {
  //获取显示区生成的验证码
  var checkCode = document.getElementById("checkCode").innerHTML;
  //获取输入的验证码
  var code = document.getElementById("code").value;

  if (code.length <= 0) {
    alert("请输入验证码！");
    return false;
  } else if (code.toUpperCase() != checkCode.toUpperCase()) {
    alert("验证码输入有误！");
    createCode(4);
    return false;
  } else {
    return true;
  }
}

function login() {
  //验证码的结果
  var codeResult = validateCode();
  //获取输入的账号
  var account = document.getElementById("account").value;
  //获取输入的密码
  var password = document.getElementById("password").value;

  if (codeResult) {
    if (!account) {
      alert('请填写账号！')
    }
    else if (!password) {
      alert('请填写密码！')
    }
    else if (account !== 'admin' || password !== "123456") {
      alert('账号或密码有误！')
    } else {
      alert('登录成功！');
      location.href = `https://www.zqu.edu.cn/`
    }

  }
}
