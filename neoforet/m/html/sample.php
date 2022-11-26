<? include("../include/header.html"); ?>
<div id="subContentsWrap">
  <div id="subContents">
    <div id="contents">
      <div class="breadCrumb">
        <ul>
          <li>
            <a href=""><span class="material-icons"> home </span></a>
          </li>
          <li><a href="">고객지원</a></li>
          <li><a href="">샘플신청</a></li>
        </ul>
      </div>
      <h2 class="subTitle">고객 지원</h2>
      <nav id="lnb">
        <h3 class="hidden">local navigation bar</h3>
        <ul>
          <li><a href="">FAQ</a></li>
          <li><a href="">온라인 문의</a></li>
          <li><a href="">담당자 연락처</a></li>
          <li><a href="">제품 카탈로그</a></li>
          <li class="on"><a href="">샘플신청</a></li>
        </ul>
      </nav>
      <div class="boardBox">
        <div class="info">
          <p>신청 내용에 개인 정보를 기재하시는 경우, 답변 완료 후 임의로 삭제될 수 있사오니 개인 정보 기재는 삼가주세요.</p>
          <p><span class="require">*</span> 항목은 필수 입력항목입니다.</p>
        </div>
        <table class="board write">
          <colgroup>
            <col style="width: 10%" />
            <col style="width: 40%" />
            <col style="width: 10%" />
            <col style="width: 40%" />
          </colgroup>
          <tbody>
            <tr>
              <th scope="row">회사명 <span class="require">*</span></th>
              <td><input type="text" name="" id="" /></td>
              <th scope="row" class="even">이름 <span class="require">*</span></th>
              <td><input type="text" name="" id="" /></td>
            </tr>
            <tr>
              <th scope="row">휴대전화 <span class="require">*</span></th>
              <td><input type="text" name="" id="" /></td>
              <th scope="row" class="even">이메일 <span class="require">*</span></th>
              <td><input type="text" name="" id="" /></td>
            </tr>
            <tr>
              <th scope="row">샘플종류 <span class="require">*</span></th>
              <td colspan="3" class="harf">
                <select name="" id="">
                  <option value="">네오포레</option>
                  <option value="">네오포레</option>
                  <option value="">네오포레</option>
                </select>
              </td>
            </tr>
            <tr>
              <th scope="row">주소 <span class="require">*</span></th>
              <td class="address" colspan="3">
                <div class="addr01">
                  <input type="text" name="" id="postcode" class="readonly" readonly placeholder="우편번호" />
                  <button onclick="searchPostCode();"><span class="material-icons"> search </span>우편번호 검색</button>
                </div>
                <div class="addr02">
                  <input type="text" name="" id="roadAddress" class="readonly" readonly placeholder="주소" />
                  <input type="text" name="" id="" placeholder="나머지 주소 입력" class="etc" />
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">제목 <span class="require">*</span></th>
              <td colspan="3"><input type="text" name="" id="" /></td>
            </tr>
            <tr>
              <th scope="row">내용 <span class="require">*</span></th>
              <td colspan="3"><textarea name="" id="" cols="30" rows="10"></textarea></td>
            </tr>
            <tr>
              <th scope="row">첨부파일</th>
              <td colspan="3"><input type="file" name="" id="" /></td>
            </tr>
          </tbody>
        </table>
        <div class="agreeBox">
          <div class="agree">
            <div class="show">
              <label class="checkbox">
                <input type="checkbox" name="" id="" />
                <span class="label">개인정보 수집에 동의합니다.</span>
              </label>
              <button>전문보기</button>
            </div>
            <div>
              <label class="checkbox">
                <input type="checkbox" name="" id="" />
                <span class="label">만 14세 이상입니다.</span>
              </label>
            </div>
          </div>
          <button type="submit">확인</button>
        </div>
      </div>
    </div>
  </div>
</div>
<script>
  //본 예제에서는 도로명 주소 표기 방식에 대한 법령에 따라, 내려오는 데이터를 조합하여 올바른 주소를 구성하는 방법을 설명합니다.
  function searchPostCode() {
    new daum.Postcode({
      oncomplete: function (data) {
        // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

        // 도로명 주소의 노출 규칙에 따라 주소를 표시한다.
        // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
        var roadAddr = data.roadAddress; // 도로명 주소 변수
        var extraRoadAddr = ""; // 참고 항목 변수

        // 법정동명이 있을 경우 추가한다. (법정리는 제외)
        // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
        if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
          extraRoadAddr += data.bname;
        }
        // 건물명이 있고, 공동주택일 경우 추가한다.
        if (data.buildingName !== "" && data.apartment === "Y") {
          extraRoadAddr += extraRoadAddr !== "" ? ", " + data.buildingName : data.buildingName;
        }
        // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
        if (extraRoadAddr !== "") {
          extraRoadAddr = " (" + extraRoadAddr + ")";
        }

        // 우편번호와 주소 정보를 해당 필드에 넣는다.
        document.getElementById("postcode").value = data.zonecode;
        document.getElementById("roadAddress").value = roadAddr;
        //document.getElementById("jibunAddress").value = data.jibunAddress;
      },
    }).open();
  }
</script>
<? include("../include/footer.html"); ?>
