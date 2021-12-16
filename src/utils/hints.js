const { randomizeHints } = require("./randomize");

const hintMap = {
  testCaseA: ({ first, second, third, fourth }) => [
    `
    <div class="card-body">
        <p id="h1" class="text-center"><input type="text" id="b1" value="${first[0]}" readonly> <input type="text" id="b1"
        value="${first[1]}" readonly> <input type="text" id="b1" value="${first[2]}" readonly></p>
    
        <h5 class="text-center">
            One number is correct and
            in the correct place
        </h5>
    </div>`,
    `
        <div class="card-body">
            <p id="h2" class="text-center"><input type="text" id="b1" value="${second[0]}" readonly> <input type="text" id="b1"
            value="${second[1]}" readonly> <input type="text" id="b1" value="${second[2]}" readonly> </p>
    
            <h5 class="text-center">
                One number is correct but in the wrong place
            </h5>
        </div>`,
    `
        <div class="card-body">
            <p id="h3" class="text-center"><input type="text" id="b1" value="${third[0]}" readonly> <input type="text" id="b1"
            value="${third[1]}" readonly> <input type="text" id="b1" value="${third[2]}" readonly> </p>
    
            <h5 class="text-center">
                Two numbers are correct but
                in the wrong place
            </h5>
    </div>`,
    `
        <div class="card-body">
            <p id="h4" class="text-center"><input type="text" id="b1" value="${fourth[0]}" readonly> <input type="text" id="b1"
            value="${fourth[1]}" readonly> <input type="text" id="b1" value="${fourth[2]}" readonly> </p>
    
            <h5 class="text-center">
                Two numbers are correct and in the correct place
            </h5>
    </div>`,
  ],
  testCaseB: ({ first, second, third, fourth }) => [
    `
    <div class="card-body">
        <p id="h1" class="text-center"><input type="text" id="b1" value="${first[0]}" readonly> <input type="text" id="b1"
        value="${first[1]}" readonly> <input type="text" id="b1" value="${first[2]}" readonly></p>
    
        <h5 class="text-center">
            One number is correct and
            in the correct place
        </h5>
    </div>`,
    `
        <div class="card-body">
            <p id="h2" class="text-center"><input type="text" id="b1" value="${second[0]}" readonly> <input type="text" id="b1"
            value="${second[1]}" readonly> <input type="text" id="b1" value="${second[2]}" readonly> </p>
    
            <h5 class="text-center">
                One number is correct but in the wrong place
            </h5>
        </div>`,
    `
        <div class="card-body">
            <p id="h3" class="text-center"><input type="text" id="b1" value="${third[0]}" readonly> <input type="text" id="b1"
            value="${third[1]}" readonly> <input type="text" id="b1" value="${third[2]}" readonly> </p>
    
            <h5 class="text-center">
                Two numbers are correct but
                in the wrong place
            </h5>
    </div>`,
    `
        <div class="card-body">
            <p id="h4" class="text-center"><input type="text" id="b1" value="${fourth[0]}" readonly> <input type="text" id="b1"
            value="${fourth[1]}" readonly> <input type="text" id="b1" value="${fourth[2]}" readonly> </p>
    
            <h5 class="text-center">
                Two numbers are correct and in the correct place
            </h5>
    </div>`,
  ],
  testCaseC: ({ first, second, third, fourth }) => [
    `
    <div class="card-body">
        <p id="h1" class="text-center"><input type="text" id="b1" value="${first[0]}" readonly> <input type="text" id="b1"
        value="${first[1]}" readonly> <input type="text" id="b1" value="${first[2]}" readonly></p>
    
        <h5 class="text-center">
            One number is correct and
            in the correct place
        </h5>
    </div>`,
    `
        <div class="card-body">
            <p id="h2" class="text-center"><input type="text" id="b1" value="${second[0]}" readonly> <input type="text" id="b1"
            value="${second[1]}" readonly> <input type="text" id="b1" value="${second[2]}" readonly> </p>
    
            <h5 class="text-center">
                One number is correct but in the wrong place
            </h5>
        </div>`,
    `
        <div class="card-body">
            <p id="h3" class="text-center"><input type="text" id="b1" value="${third[0]}" readonly> <input type="text" id="b1"
            value="${third[1]}" readonly> <input type="text" id="b1" value="${third[2]}" readonly> </p>
    
            <h5 class="text-center">
                Two numbers are correct but
                in the wrong place
            </h5>
    </div>`,
    `
        <div class="card-body">
            <p id="h4" class="text-center"><input type="text" id="b1" value="${fourth[0]}" readonly> <input type="text" id="b1"
            value="${fourth[1]}" readonly> <input type="text" id="b1" value="${fourth[2]}" readonly> </p>
    
            <h5 class="text-center">
                Nothing is correct
            </h5>
    </div>`,
  ],
  testCaseD: ({ first, second, third, fourth }) => [
    `
    <div class="card-body">
        <p id="h1" class="text-center"><input type="text" id="b1" value="${first[0]}" readonly> <input type="text" id="b1"
        value="${first[1]}" readonly> <input type="text" id="b1" value="${first[2]}" readonly></p>
    
        <h5 class="text-center">
            One number is correct and
            in the correct place
        </h5>
    </div>`,
    `
        <div class="card-body">
            <p id="h2" class="text-center"><input type="text" id="b1" value="${second[0]}" readonly> <input type="text" id="b1"
            value="${second[1]}" readonly> <input type="text" id="b1" value="${second[2]}" readonly> </p>
    
            <h5 class="text-center">
                One number is correct but in the wrong place
            </h5>
        </div>`,
    `
        <div class="card-body">
            <p id="h3" class="text-center"><input type="text" id="b1" value="${third[0]}" readonly> <input type="text" id="b1"
            value="${third[1]}" readonly> <input type="text" id="b1" value="${third[2]}" readonly> </p>
    
            <h5 class="text-center">
                Two numbers are correct but
                in the wrong place
            </h5>
    </div>`,
    `
        <div class="card-body">
            <p id="h4" class="text-center"><input type="text" id="b1" value="${fourth[0]}" readonly> <input type="text" id="b1"
            value="${fourth[1]}" readonly> <input type="text" id="b1" value="${fourth[2]}" readonly> </p>
    
            <h5 class="text-center">
                Nothing is correct
            </h5>
    </div>`,
  ],
};

const setHints = (person, values) => {
  const hints = randomizeHints(hintMap[person](values));

  document.querySelector("#hints").innerHTML = hints
    .map(
      (hint, index) => `<div>
<div class="card m-4" style="width: 18rem;">
	<div class="card-header card-title">
		<h5 class="card-title text-center">
			<i class="far fa-lightbulb"></i>
			Hint #${index + 1}
		</h5>
	</div>
	${hint}
</div>
</div>`
    )
    .join("");
};

module.exports = { setHints };
