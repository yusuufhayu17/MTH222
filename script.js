const questions = [
  {
    question: "What is the relationship between the Beta and Gamma functions as proven in the document?",
    options: [
      "B(x,y)=Γ(x)Γ(y)Γ(x+y)",
      "B(x,y)=Γ(x+y)/Γ(x)Γ(y)",
      "B(x,y)=Γ(x)Γ(y)/Γ(x+y)",
      "B(x,y)=Γ(x)Γ(y)/Γ(x)-Γ(y)"
    ],
    answer: 2
  },
  {
    question: "The proof for the relationship between the Beta and Gamma functions starts with the definition of which function?",
    options: [
      "Beta function",
      "Gamma function",
      "Legendre polynomial",
      "Stoke's theorem"
    ],
    answer: 1
  },
  {
    question: "According to the document, the Gamma function is defined by which integral?",
    options: [
      "∫₀^∞ e^(-t)t^(x-1)dt",
      "∫₀^∞ e^(-t)t^(x+1)dt",
      "∫₀¹ t^(x-1)(1-t)^(y-1)dt",
      "∫₀^(π/2) sin^(2x-1)θ cos^(2y-1)θ dθ"
    ],
    answer: 0
  },
  {
    question: "To evaluate the Gamma function, what substitution is made for t?",
    options: ["t=u", "t=u²", "t=v", "t=x+y"],
    answer: 1
  },
  {
    question: "The proof uses a transformation to what coordinate system to solve the integral?",
    options: [
      "Cartesian coordinates",
      "Cylindrical coordinates",
      "Polar coordinates",
      "Spherical coordinates"
    ],
    answer: 2
  },
  {
    question: "What is the value of sin²θ + cos²θ used in the polar coordinate transformation?",
    options: ["1", "-1", "0", "2"],
    answer: 0
  },
  {
    question: "The integral form of the Beta function is given as:",
    options: [
      "2∫₀^(π/2) sin^(2x-1)θ cos^(2y-1)θ dθ",
      "∫₀^(π/2) sin^(2x-1)θ cos^(2y-1)θ dθ",
      "2∫₀^∞ sin^(2x-1)θ cos^(2y-1)θ dθ",
      "∫₀¹ t^(x-1)(1-t)^(y-1)dt"
    ],
    answer: 0
  },
  {
    question: "The document states that the Beta function, B(x,y), can also be written in integral form as:",
    options: [
      "2∫₀^(π/2) sin^(2x-1)θ cos^(2y-1)g dθ",
      "2∫₀^(π/2) sin^(2x-1)θ cos^(2y-1)e dθ",
      "2∫₀^(π/2) sin^(2n-1)θ cos^(2y-1)g dθ",
      "2∫₀^(x/3) sin^(2x-1)θ cos^(2y-1)g dθ"
    ],
    answer: 3
  },
  {
    question: "The proof involves separating the terms with r and the terms with θ from a double integral.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "What is the generating function for Legendre polynomials, as shown in the document?",
    options: [
      "1/√(1-2tx+t²) = ∑ₙ₌₀^∞ Pₙ(x)tⁿ",
      "1/(1-2tx+t²) = ∑ₙ₌₀^∞ Pₙ(x)tⁿ",
      "1/√(1-2tx+t²) = ∑ₙ₌₀^∞ Pₙ(x)t^(2n)",
      "1/√(1-t²) = ∑ₙ₌₀^∞ Pₙ(x)tⁿ"
    ],
    answer: 0
  },
  {
    question: "The document proves the orthogonality property of Legendre polynomials when m=n. What is the value of ∫₋₁¹ Pₙ²(x)dx?",
    options: ["2/(2n-1)", "2/(2n+1)", "1/(2n+1)", "0"],
    answer: 1
  },
  {
    question: "What is the first step in proving the orthogonality property of Legendre polynomials from the generating function?",
    options: [
      "Integrating both sides from -1 to 1",
      "Differentiating both sides",
      "Squaring both sides",
      "Multiplying by t"
    ],
    answer: 2
  },
  {
    question: "After squaring the generating function, what is the next step?",
    options: [
      "Equating the coefficients of t^(2n)",
      "Differentiating with respect to x",
      "Integrating from -1 to 1",
      "Substituting t=1"
    ],
    answer: 2
  },
  {
    question: "In the proof for the orthogonality of Legendre polynomials, the integral ∫₋₁¹ dx/(1-2tx+t²) is evaluated. What is the result?",
    options: [
      "(1/t)ln((1-t)/(1+t))",
      "(1/t)ln((1+t)/(1-t))",
      "ln(1-2tx+t²)",
      "(1/t)e^(-t)"
    ],
    answer: 1
  },
  {
    question: "The proof of the orthogonality of Legendre polynomials concludes by equating the coefficients of which term?",
    options: ["t", "tⁿ", "t^(2n)", "x"],
    answer: 2
  },
  {
    question: "The second problem in the document is to verify which theorem?",
    options: [
      "Green's Theorem",
      "Gauss's Divergence Theorem",
      "Stoke's Theorem",
      "Fundamental Theorem of Calculus"
    ],
    answer: 2
  },
  {
    question: "What is the vector field A given in the Stoke's theorem problem?",
    options: [
      "A=(y-z+2)x̂+(y-x+4)ŷ-xzẑ",
      "A=(y-z+2)x̂+(yz+4)ŷ-xzẑ",
      "A=(y-z+2)x̂+(z-x+4)ŷ-xzẑ",
      "A=(y-z+2)x̂+(yz+4)ŷ-xzẑ"
    ],
    answer: 1
  },
  {
    question: "The problem is to verify the theorem for a cube above which plane?",
    options: ["xz-plane", "yz-plane", "xy-plane", "xy, yz, and xz planes"],
    answer: 2
  },
  {
    question: "What are the dimensions of the cube for which Stoke's theorem is verified?",
    options: [
      "0 ≤ x ≤ 1, 0 ≤ y ≤ 1, 0 ≤ z ≤ 1",
      "0 ≤ x ≤ 2, 0 ≤ y ≤ 2, 0 ≤ z ≤ 2",
      "0 ≤ x ≤ 1, 0 ≤ y ≤ 2, 0 ≤ z ≤ 2",
      "0 ≤ x ≤ 2, 0 ≤ y ≤ 1, 0 ≤ z ≤ 1"
    ],
    answer: 1
  },
  {
    question: "The document calculates the curl of the vector field, ∇×A. What is the result?",
    options: [
      "-y x̂ + (z+1) ŷ + ẑ",
      "y x̂ + (z+1) ŷ - ẑ",
      "-y x̂ + (z+1) ŷ - ẑ",
      "-y x̂ + (z-1) ŷ - ẑ"
    ],
    answer: 2
  },
  {
    question: "What is the result of the surface integral over surface DEFG?",
    options: ["4", "-4", "8", "-8"],
    answer: 1
  },
  {
    question: "What is the result of the surface integral over surface ABCD?",
    options: ["4", "-4", "8", "-8"],
    answer: 0
  },
  {
    question: "What is the result of the surface integral over surface ABEF?",
    options: ["4", "-4", "8", "-8"],
    answer: 2
  },
  {
    question: "What is the result of the surface integral over surface OGDC?",
    options: ["4", "-4", "8", "-8"],
    answer: 3
  },
  {
    question: "What is the result of the surface integral over surface BCDE?",
    options: ["4", "-4", "8", "-8"],
    answer: 1
  },
  {
    question: "The Beta function can be defined using which other integral?",
    options: [
      "∫₀¹ t^(x-1)(1-t)^(y-1)dt",
      "∫₀^∞ t^(x-1)(1-t)^(y-1)dt",
      "∫₀¹ t^(x-1)(1+t)^(y-1)dt",
      "∫₀^∞ t^x(1-t)^y dt"
    ],
    answer: 0
  },
  {
    question: "The expression Γ(x+y) = 2∫₀^∞ e^(-r²)r^(2(x+y)-1)dr is derived by substituting which variable?",
    options: ["u=r", "v=r", "t=r²", "t=r"],
    answer: 2
  },
  {
    question: "What law of indices is mentioned in the proof of the Gamma function?",
    options: [
      "x^a × x^b = x^(a-b)",
      "x^a × x^b = x^(ab)",
      "x^a × x^b = x^(a+b)",
      "x^a ÷ x^b = x^(a+b)"
    ],
    answer: 2
  },
  {
    question: "The proof of Stoke's Theorem involves evaluating the curl of a vector field. The symbol for curl is:",
    options: ["∇·A", "∇×A", "∇A", "∇²A"],
    answer: 1
  },
  {
    question: "The problem on Stoke's Theorem requires calculating surface integrals over how many surfaces of the cube?",
    options: ["4", "5", "6", "3"],
    answer: 1
  },
  {
    question: "What is the value of the line integral around the boundary of the surface in the Stoke's theorem problem?",
    options: [
      "Sum of all surface integrals",
      "Curl of the vector field",
      "Divergence of the vector field",
      "Zero"
    ],
    answer: 0
  },
  {
    question: "In the proof for Legendre polynomials, the integral is taken from which limits?",
    options: ["0 to 1", "-∞ to ∞", "-1 to 1", "0 to π/2"],
    answer: 2
  },
  {
    question: "The document mentions Legendre polynomials are related to which polynomial type?",
    options: [
      "Chebyshev polynomials",
      "Orthogonal polynomials",
      "Hermite polynomials",
      "Laguerre polynomials"
    ],
    answer: 1
  },
  {
    question: "The proof of the Beta-Gamma relationship involves which type of double integral?",
    options: [
      "∫∫ e^(-r²) dudv",
      "∫∫ e^(-(u²+v²)) dudv",
      "∫∫ u²+v² dudv",
      "∫∫ e^(-u²)e^(-v²) dudv"
    ],
    answer: 1
  },
  {
    question: "The document mentions that the solution to the Legendre polynomial problem was copied from a textbook.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "The document's Stoke's theorem problem asks to verify the theorem for a cube above the xy-plane, which means excluding which surface?",
    options: [
      "Surface BCDE",
      "Surface AFGO",
      "Surface DEFG",
      "Surface ABCD"
    ],
    answer: 1
  },
  {
    question: "In the Stoke's theorem problem, what is the normal vector n for the surface BCDE?",
    options: ["x̂", "ŷ", "ẑ", "-ẑ"],
    answer: 2
  },
  {
    question: "What is the value of the curl of A at the point (0,0,0)?",
    options: [
      "-y x̂ + (z+1) ŷ - ẑ",
      "ŷ - ẑ",
      "-y x̂ - ẑ",
      "(z+1) ŷ"
    ],
    answer: 1
  },
  {
    question: "The document provides a 'short solution' for which problem?",
    options: [
      "Legendre polynomials",
      "Stoke's theorem",
      "Beta and Gamma functions",
      "All of the above"
    ],
    answer: 2
  },
  {
    question: "What is the result of the surface integral over surface DEFG, which has a normal vector of x̂ and a surface area of 4?",
    options: ["4", "-4", "8", "-8"],
    answer: 1
  },
  {
    question: "The transformation from Cartesian to Polar coordinates is given by:",
    options: [
      "x = r cosθ, y = r sinθ",
      "u = r sinθ, v = r cosθ",
      "u = r cosθ, v = r sinθ",
      "x = r sinθ, y = r cosθ"
    ],
    answer: 1
  },
  {
    question: "The Beta function proof involves a change of variables in the Gamma function definition.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "What are the limits of integration for θ in the polar coordinate transformation?",
    options: ["0 to π", "0 to 2π", "0 to π/2", "0 to 1"],
    answer: 2
  },
  {
    question: "In the Legendre polynomial proof, what happens to the right-hand side of the equation when m=n?",
    options: [
      "It becomes ∑ₙ₌₀^∞ ∫₋₁¹ Pₙ²(x) dx",
      "It becomes ∑ₘ₌₀^∞ ∑ₙ₌₀^∞ ∫₋₁¹ Pₘ(x) Pₙ(x) dx",
      "It becomes ∑ₙ₌₀^∞ {∫₋₁¹ Pₙ²(x)dx} t^(2n)",
      "It becomes ∫₋₁¹ Pₙ²(x) dx"
    ],
    answer: 2
  },
  {
    question: "What is the value of the integral ∫₋₁¹ Pₘ(x)Pₙ(x)dx when m ≠ n?",
    options: ["2/(2n+1)", "0", "1", "2/(2m+1)"],
    answer: 1
  },
  {
    question: "In the Stoke's theorem problem, what is the normal vector n for the surface ABEF?",
    options: ["-ŷ", "ŷ", "ẑ", "-ẑ"],
    answer: 1
  },
  {
    question: "The curl of a vector field is a:",
    options: ["Scalar", "Vector", "Matrix", "Tensor"],
    answer: 1
  },
  {
    question: "The Stoke's theorem states that the surface integral of the curl of a vector field is equal to the:",
    options: [
      "Line integral of the vector field around the boundary",
      "Volume integral of the divergence of the vector field",
      "Surface integral of the vector field",
      "Line integral of the vector field"
    ],
    answer: 0
  },
  {
    question: "What is the value of the Gamma function at x=1?",
    options: ["0", "1", "∞", "undefined"],
    answer: 1
  },
  {
    question: "The generating function for Legendre polynomials is given as a summation from n=0 to:",
    options: ["1", "n", "∞", "2n"],
    answer: 2
  },
  {
    question: "When proving the orthogonality property, what is the result of the integral of the generating function?",
    options: [
      "(1/t)ln((1-t)/(1+t))",
      "(1/t)ln((1+t)/(1-t))",
      "∑ₙ₌₀^∞ (2t^(2n+1))/(2n+1)",
      "∑ₙ₌₀^∞ {∫₋₁¹ Pₙ²(x)dx} t^(2n)"
    ],
    answer: 1
  },
  {
    question: "The proof of the Beta-Gamma function relationship is a proof by:",
    options: ["Induction", "Contradiction", "Direct proof", "Construction"],
    answer: 2
  },
  {
    question: "What is the value of ∫₋₁¹ Pₙ²(x)dx when n=0?",
    options: ["2", "2/3", "2/5", "0"],
    answer: 0
  },
  {
    question: "What are the dimensions of the cube's faces in the Stoke's theorem problem?",
    options: ["1×1", "2×2", "1×2", "2×1"],
    answer: 1
  },
  {
    question: "The line integral in Stoke's theorem is calculated around the boundary of the surface.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "In the proof of the Beta-Gamma relationship, the double integral is transformed into a product of two single integrals.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "What is the normal vector n for the surface AFGO?",
    options: ["x̂", "ŷ", "ẑ", "-ẑ"],
    answer: 3
  },
  {
    question: "The substitution u=1-2tx+t² is used to evaluate which integral?",
    options: [
      "∫₀^∞ e^(-t)t^(x-1)dt",
      "∫₀¹ t^(x-1)(1-t)^(y-1)dt",
      "∫₋₁¹ dx/(1-2tx+t²)",
      "∫₀^(π/2) sin^(2x-1)θ cos^(2y-1)θ dθ"
    ],
    answer: 2
  },
  {
    question: "The generating function for Legendre polynomials is given as a series of which variable?",
    options: ["x", "t", "n", "Pₙ(x)"],
    answer: 1
  },
  {
    question: "In the proof of Stoke's theorem, the surface integral over surface OGDC is calculated. The normal vector is given as:",
    options: ["ŷ", "-ŷ", "x̂", "-x̂"],
    answer: 1
  },
  {
    question: "The integral ∫₋₁¹ dx/(1-2tx+t²) is evaluated with respect to which variable?",
    options: ["x", "t", "u", "a constant"],
    answer: 0
  },
  {
    question: "What is the relationship between Γ(x+y) and the double integral shown in the Beta-Gamma proof?",
    options: [
      "Γ(x+y) = 2∫₀^∞ e^(-r²)r^(2(x+y)-1)dr",
      "Γ(x+y) = ∫₀^∞ e^(-r²)r^(2(x+y)-1)dr",
      "Γ(x+y) = 2∫₀^(π/2) e^(-r²)r^(2(x+y)-1)dr",
      "Γ(x+y) = ∫₀¹ e^(-r²)r^(2(x+y)-1)dr"
    ],
    answer: 0
  },
  {
    question: "The orthogonality property of Legendre polynomials is expressed as ∫₋₁¹ Pₘ(x)Pₙ(x)dx = 0 for m ≠ n.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "The final value of the surface integral over all surfaces (excluding the xy-plane) is the sum of the individual surface integrals.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "What is the integral of 1/u?",
    options: ["ln(u)", "e^u", "-1/u²", "u"],
    answer: 0
  },
  {
    question: "The document refers to the Beta function as a different version of the Gamma function.",
    options: ["True", "False"],
    answer: 1
  },
  {
    question: "What is the first step in solving the Stoke's theorem problem?",
    options: [
      "Calculating the surface integral",
      "Calculating the curl of the vector field",
      "Calculating the line integral",
      "Sketching the cube"
    ],
    answer: 1
  },
  {
    question: "In the Stoke's theorem problem, what are the limits of integration for x, y, and z?",
    options: ["from 0 to 1", "from 0 to 2", "from 1 to 2", "from 0 to 3"],
    answer: 1
  },
  {
    question: "The document proves that B(x,y)=Γ'(x)Γ'(y)/Γ(x(x))",
    options: ["True", "False"],
    answer: 1
  },
  {
    question: "The problem is to verify Stoke's theorem, meaning the line integral should be equal to the surface integral.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "In the Legendre polynomial proof, the coefficient of t^(2n) is equated to find the final result.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "The Gamma function is mentioned as a definite integral from which limits?",
    options: ["0 to 1", "0 to ∞", "-1 to 1", "0 to π/2"],
    answer: 1
  },
  {
    question: "The normal vector for a surface parallel to the yz-plane is:",
    options: ["±ŷ", "±ẑ", "±x̂", "±î"],
    answer: 2
  },
  {
    question: "What is the purpose of the transformation to polar coordinates in the Beta-Gamma proof?",
    options: [
      "To simplify the integral",
      "To confuse the reader",
      "To make the integral more complex",
      "To change the limits of integration to 0 and 1"
    ],
    answer: 0
  },
  {
    question: "The document states that the Beta function is also known as Euler's integral of the first kind.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "What is the final step in the proof of the Beta-Gamma relationship?",
    options: [
      "Dividing both sides by 2∫₀^∞ e^(-r²)r^(2(x+y)-1)dr",
      "Squaring both sides",
      "Taking the natural logarithm",
      "Integrating both sides"
    ],
    answer: 0
  },
  {
    question: "What is the sum of all surface integrals in the Stoke's theorem problem?",
    options: [
      "-4+4+8-8-4",
      "-4+4+8-8+4",
      "-4-4+8-8-4",
      "4+4+8+8+4"
    ],
    answer: 0
  },
  {
    question: "The document proves the formula for ∫₋₁¹ Pₙ²(x)dx from the generating function.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "What is the value of the integral ∫₀² -2 dz?",
    options: ["0", "2", "-2", "-4"],
    answer: 3
  },
  {
    question: "The integral ∫₀² (2z+2)dz is evaluated for which surface?",
    options: ["OGDC", "DEFG", "ABEF", "BCDE"],
    answer: 2
  },
  {
    question: "What is the value of the integral ∫₀² ∫₀² -1 dx dy?",
    options: ["-1", "-2", "-4", "4"],
    answer: 2
  },
  {
    question: "The Stoke's theorem problem is about a cube above the xy-plane, which means the bottom surface is excluded.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "The document mentions the term 'orthogonal polynomials' in the context of which problem?",
    options: [
      "Beta-Gamma function",
      "Stoke's theorem",
      "Legendre polynomials",
      "All of the above"
    ],
    answer: 2
  },
  {
    question: "What is the value of the integral ∫₀² (-2z-2)dz?",
    options: ["-4", "-8", "8", "4"],
    answer: 1
  },
  {
    question: "The Gamma function Γ(y) is defined by which integral?",
    options: [
      "∫₀^∞ e^(-t)t^(y-1)dt",
      "∫₀^∞ e^(-t)t^y dt",
      "∫₀¹ e^(-t)t^(y-1)dt",
      "∫₀^∞ e^(-u²)u^(2y-1)du"
    ],
    answer: 0
  },
  {
    question: "The generating function for Legendre polynomials is a power series in which variable?",
    options: ["t", "x", "n", "m"],
    answer: 0
  },
  {
    question: "The final step in proving the orthogonality of Legendre polynomials is to:",
    options: [
      "Integrate from -1 to 1",
      "Equate coefficients of t^(2n)",
      "Square both sides",
      "Substitute t=1"
    ],
    answer: 1
  },
  {
    question: "The document mentions 'Irgendre's' which is likely a misspelling of which polynomial?",
    options: ["Legendre", "Laguerre", "Hermite", "Chebyshev"],
    answer: 0
  },
  {
    question: "In the Stoke's theorem problem, the curl of A is a vector.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "What is the value of the integral ∫₀² ∫₀² (z+1)dx dz?",
    options: ["4", "8", "2", "-4"],
    answer: 1
  },
  {
    question: "The document provides a solution for the orthogonality of Legendre polynomials for which condition?",
    options: ["m ≠ n", "m = n", "m+n=0", "m=n=0"],
    answer: 1
  },
  {
    question: "The substitution t=v² is used to evaluate which function?",
    options: ["B(x,y)", "Γ(x)", "Γ(y)", "Γ(x+y)"],
    answer: 1
  },
  {
    question: "The document mentions a 'short solution' for the proof of the Beta-Gamma relationship, which is for:",
    options: ["Cramming", "Detailed understanding", "Beginners", "Experts"],
    answer: 0
  },
  {
    question: "The Stoke's theorem problem involves calculating the surface integral of the curl of A.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "What is the result of the integral ∫₀² (y²/2)|₀² dz?",
    options: ["2", "4", "8", "0"],
    answer: 1
  },
  {
    question: "The document provides a proof for the relationship between the Beta and Gamma functions.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "In the Stoke's theorem problem, the vector field A is given with how many components?",
    options: ["1", "2", "3", "4"],
    answer: 2
  },
  {
    question: "The document states that the Beta function can be expressed as a definite integral of sine and cosine functions.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "The value of the surface integral over a particular surface can be zero.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "The document is titled 'MTH222 (ALL SOLVED EXERCISE) SOLUTIONS BY N.S @COOL'.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "A vector-valued function is a function that maps real numbers to what?",
    options: ["Scalars", "Vectors", "Matrices", "Tensors"],
    answer: 1
  },
  {
    question: "The derivative of a vector-valued function X(t)=x(t)i+y(t)j+z(t)k is found by:",
    options: [
      "Taking the derivative of only the i component",
      "Taking the derivative of only the j component",
      "Taking the derivative of each component function",
      "Taking the derivative of only the k component"
    ],
    answer: 2
  },
  {
    question: "Given r(t)=⟨3t²,cos(t),e²ᵗ⟩, what is the derivative, r′(t)?",
    options: [
      "⟨6t,−sin(t),2e²ᵗ⟩",
      "⟨3t,−sin(t),e²ᵗ⟩",
      "⟨6t,sin(t),2e²ᵗ⟩",
      "⟨t³,−sin(t),e²ᵗ/2⟩"
    ],
    answer: 0
  },
  {
    question: "If the position vector of a particle is given by r(t)=(t³−2t)i+(4t+1)j−5tk, what is the velocity vector, v(t)?",
    options: [
      "(3t²−2)i+4j−5k",
      "(3t²−2)i−4j+5k",
      "(t³−2t)i+(4t+1)j",
      "(3t²)i+4j−5k"
    ],
    answer: 0
  },
  {
    question: "For the position vector in the previous question, what is the acceleration vector, a(t)?",
    options: ["6ti", "6ti+4j", "6ti−5k", "6ti+0j+0k"],
    answer: 0
  },
  {
    question: "The limit of a vector-valued function is continuous if the limits of its component functions exist.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "Given r(t)=⟨(t−2)/(t²−4),sin(πt),ln(t)⟩, what is the limit as t→2?",
    options: [
      "⟨4,0,ln(2)⟩",
      "⟨4,1,ln(2)⟩",
      "⟨2,0,ln(2)⟩",
      "⟨4,0,2⟩"
    ],
    answer: 0
  },
  {
    question: "The length of the instantaneous velocity vector ∣v(t)∣ is also known as the:",
    options: [
      "Instantaneous acceleration",
      "Instantaneous speed",
      "Instantaneous position",
      "Instantaneous jerk"
    ],
    answer: 1
  },
  {
    question: "The derivative of the dot product of two vector-valued functions, d/dt (u(t)⋅v(t)), is:",
    options: [
      "u′(t)⋅v′(t)",
      "u′(t)⋅v(t)+u(t)⋅v′(t)",
      "u(t)⋅v(t)−u′(t)⋅v′(t)",
      "u′(t)×v(t)+u(t)×v′(t)"
    ],
    answer: 1
  },
  {
    question: "What is the derivative of the cross product of two vector-valued functions, d/dt (u(t)×v(t))?",
    options: [
      "u′(t)⋅v(t)+u(t)⋅v′(t)",
      "u′(t)×v(t)+u(t)×v′(t)",
      "u′(t)×v′(t)",
      "u(t)×v(t)"
    ],
    answer: 1
  },
  {
    question: "If f(t)=t² and r(t)=⟨cos(t),sin(t)⟩, what is d/dt (f(t)r(t))?",
    options: [
      "⟨−t²sin(t),t²cos(t)⟩",
      "⟨2tcos(t),2tsin(t)⟩",
      "⟨2tcos(t)−t²sin(t),2tsin(t)+t²cos(t)⟩",
      "⟨−2tsin(t),2tcos(t)⟩"
    ],
    answer: 2
  },
  {
    question: "The vector differential operator ∇ is defined as:",
    options: [
      "∂/∂x i + ∂/∂y j + ∂/∂z k",
      "xi + yj + zk",
      "∂/∂x + ∂/∂y + ∂/∂z",
      "∂²/∂x² + ∂²/∂y² + ∂²/∂z²"
    ],
    answer: 0
  },
  {
    question: "If a scalar function is ϕ(x,y,z)=x²y+yz³, what is its gradient, ∇ϕ?",
    options: [
      "2x + z³",
      "2xyi + (x² + z³)j + 3yz²k",
      "2xyi + yz³j + yz²k",
      "2xi + yj + 3zk"
    ],
    answer: 1
  },
  {
    question: "Given the vector field F(x,y,z)=y²i + 2zj + x³k, what is the divergence, ∇⋅F?",
    options: ["0", "0", "0", "0"],
    answer: 0
  },
  {
    question: "For the vector field F(x,y,z)=y²i + 2zj + x³k, what is the curl, ∇×F?",
    options: [
      "−2j + 2yk",
      "−2i − 3x²j + 2yk",
      "2i − 3x²j + 2yk",
      "3x²i − 2j"
    ],
    answer: 1
  },
  {
    question: "What is the value of the line integral ∫C F⋅dr for F=⟨y²,−x²⟩ and C is the circle x² + y² = 1?",
    options: ["0", "π", "−π", "2π"],
    answer: 2
  },
  {
    question: "The double integral ∬A dxdy calculates the:",
    options: [
      "Volume of a solid",
      "Area of a region A",
      "Length of a curve",
      "Surface area of a solid"
    ],
    answer: 1
  },
  {
    question: "Evaluate the double integral ∬A (x+2y)dA where A is the rectangle 0≤x≤1 and 0≤y≤2.",
    options: ["3", "5", "7", "9"],
    answer: 1
  },
  {
    question: "The triple integral ∭V dxdydz calculates the:",
    options: [
      "Surface area",
      "Perimeter",
      "Volume of a solid V",
      "Area of a region"
    ],
    
    answer: 2
  },
  {
    question: "Evaluate the triple integral ∭V (x)dV where V is the box defined by 0≤x≤2, 0≤y≤1, and 0≤z≤1.",
    options: ["1", "2", "3", "4"],
    answer: 1
  },
  {
    question: "The Divergence Theorem relates a surface integral to a:",
    options: [
      "Line integral",
      "Double integral",
      "Volume integral",
      "Single integral"
    ],
    answer: 2
  },
  {
    question: "What is the divergence of the vector field F(x,y,z)=x²î + xyĵ + zk̂?",
    options: [
      "2x + x + 1",
      "2x + y + 1",
      "x² + xy + z",
      "2x + x + 1"
    ],
    answer: 1
  },
  {
    question: "Given F(x,y,z)=x²î + xyĵ + zk̂ and a cube of side length 1 in the first octant, what is the value of the volume integral ∭V div(F)dV?",
    options: ["1", "2", "3", "4"],
    answer: 1
  },
  {
    question: "What is the Laplace transform of f(t)=t²?",
    options: ["1/s²", "2/s³", "1/s³", "2/s²"],
    answer: 1
  },
  {
    question: "What is the Laplace transform of f(t)=sin(4t)?",
    options: [
      "s/(s² + 16)",
      "4/(s² + 16)",
      "s/(s² - 16)",
      "1/(s² + 16)"
    ],
    answer: 1
  },
  {
    question: "The First Shifting Theorem states that L[eᵃᵗ f(t)] is equal to:",
    options: [
      "F(s + a)",
      "F(s - a)",
      "F(s)/s",
      "F(s)⋅F(a)"
    ],
    answer: 1
  },
  {
    question: "What is the Laplace transform of e³ᵗ cos(2t)?",
    options: [
      "(s - 3)/((s - 3)² + 4)",
      "(s + 3)/((s + 3)² + 4)",
      "2/((s - 3)² + 4)",
      "s/((s - 3)² + 4)"
    ],
    answer: 0
  },
  {
    question: "What is the Laplace transform of te⁻²ᵗ?",
    options: [
      "1/(s + 2)²",
      "1/(s - 2)²",
      "s/(s + 2)²",
      "s/(s - 2)²"
    ],
    answer: 0
  },
  {
    question: "The Laplace transform of f′(t) is given by:",
    options: [
      "sF(s) - f(0)",
      "sF(s) + f(0)",
      "F(s)/s",
      "sF(s)"
    ],
    answer: 0
  },
  {
    question: "The Laplace transform of f′′(t) is given by:",
    options: [
      "s²F(s) - sf(0) - f′(0)",
      "s²F(s)",
      "s²F(s) - f(0)",
      "s²F(s) + sf(0) + f′(0)"
    ],
    answer: 0
  },
  {
    question: "Solve the differential equation y′ − 2y = eᵗ with y(0)=1 using Laplace transforms. What is Y(s)?",
    options: [
      "1/(s - 1) + 1/(s - 2)",
      "1/((s - 1)(s - 2)) + 1/(s - 2)",
      "1/(s - 1) - 1/(s - 2)",
      "1/(s - 1) + 1/(s - 2)²"
    ],
    answer: 1
  },
  {
    question: "A vector-valued function can be used to describe the path of a particle in space.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "If r(t)=⟨t²,3t,sin(t)⟩, what is the derivative, r′(t)?",
    options: [
      "⟨2t,3,cos(t)⟩",
      "⟨2t,3,−cos(t)⟩",
      "⟨t,3,cos(t)⟩",
      "⟨2t,3,sin(t)⟩"
    ],
    answer: 0
  },
  {
    question: "If u(t)=⟨t,t²,t³⟩ and v(t)=⟨1,2t,3t²⟩, what is u(t)⋅v(t)?",
    options: [
      "t + 2t³ + 3t⁵",
      "t + 2t² + 3t³",
      "t + 2t³ + 3t⁴",
      "t + 2t³ + 3t⁴"
    ],
    answer: 0
  },
  {
    question: "For the functions in the previous question, what is d/dt (u(t)⋅v(t))?",
    options: [
      "1 + 6t² + 12t³",
      "1 + 6t² + 12t⁴",
      "1 + 2t² + 3t³",
      "1 + 6t² + 12t³"
    ],
    answer: 0
  },
  {
    question: "A scalar function is a function that maps vectors to real numbers.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "Given ϕ(x,y,z)=xy + yz + zx, what is ∇ϕ?",
    options: [
      "⟨y + z, x + z, y + x⟩",
      "⟨x + y, y + z, z + x⟩",
      "x + y + z",
      "1"
    ],
    answer: 0
  },
  {
    question: "If a vector field F=⟨x,y,z⟩, what is its divergence, ∇⋅F?",
    options: ["0", "1", "2", "3"],
    answer: 3
  },
  {
    question: "For the vector field F=⟨x,y,z⟩, what is the curl, ∇×F?",
    options: [
      "⟨0,0,0⟩",
      "⟨1,1,1⟩",
      "⟨x,y,z⟩",
      "⟨x,y,z⟩"
    ],
    answer: 0
  },
  {
    question: "The double integral ∬A f(x,y)dA for a general region A is evaluated using:",
    options: [
      "Fubini's Theorem",
      "Stokes' Theorem",
      "Green's Theorem",
      "Divergence Theorem"
    ],
    answer: 0
  },
  {
    question: "Evaluate ∬A x²y dA where A is the rectangle 0≤x≤2 and 0≤y≤3.",
    options: ["12", "18", "24", "36"],
    answer: 1
  },
  {
    question: "The volume of a solid V is given by the triple integral ∭V dV.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "What is the volume of the box defined by 1≤x≤3, 2≤y≤4, and 0≤z≤2?",
    options: ["8", "16", "24", "32"],
    answer: 1
  },
  {
    question: "The Divergence Theorem, also known as Gauss's Theorem, relates the surface integral of a vector field to the volume integral of its divergence.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "What is the Laplace transform of f(t)=t?",
    options: ["1/s", "1/s²", "s", "s²"],
    answer: 1
  },
  {
    question: "What is the Laplace transform of f(t)=t² + t + 1?",
    options: [
      "2/s³ + 1/s² + 1/s",
      "2/s³ + 1/s² + s",
      "1/s³ + 1/s² + 1/s",
      "2/s³ + 1/s² + 1"
    ],
    answer: 0
  },
  {
    question: "What is the inverse Laplace transform of F(s)=1/(s - 5)?",
    options: ["e⁵ᵗ", "e⁻⁵ᵗ", "cos(5t)", "sin(5t)"],
    answer: 0
  },
  {
    question: "What is the Laplace transform of a piecewise function?",
    options: [
      "It is not possible to find the Laplace transform of a piecewise function.",
      "It is the sum of integrals over each interval where the function is defined.",
      "It is the product of integrals over each interval.",
      "It is the average of the integrals over each interval."
    ],
    answer: 1
  },
  {
    question: "What is the inverse Laplace transform of F(s)=(s + 1)/(s² + 2s + 5)?",
    options: [
      "e⁻ᵗ cos(2t)",
      "e⁻ᵗ sin(2t)",
      "e⁻²ᵗ cos(t)",
      "e⁻ᵗ cos(4t)"
    ],
    answer: 0
  },
  {
    question: "The Laplace transform of tⁿ is given by n!/sⁿ⁺¹.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "What is the Laplace transform of t cos(t)?",
    options: [
      "(s² - 1)/(s² + 1)²",
      "(s² + 1)/(s² + 1)²",
      "2s/(s² + 1)²",
      "1/(s² + 1)²"
    ],
    answer: 0
  },
  {
    question: "What is the Laplace transform of the solution to y′ − y = te⁻ᵗ with y(0)=0?",
    options: [
      "Y(s) = 1/((s - 1)(s + 1)²)",
      "Y(s) = 1/((s + 1)(s - 1)²)",
      "Y(s) = s/((s - 1)(s + 1)²)",
      "Y(s) = s/((s + 1)(s - 1)²)"
    ],
    answer: 0
  },
  {
    question: "What is the inverse Laplace transform of Y(s)=1/((s - 1)(s + 1)²)?",
    options: [
      "¼ eᵗ - ¼ e⁻ᵗ - ½ te⁻ᵗ",
      "¼ eᵗ + ¼ e⁻ᵗ + ½ te⁻ᵗ",
      "eᵗ - e⁻ᵗ - te⁻ᵗ",
      "¼ eᵗ - ¼ e⁻ᵗ + ½ te⁻ᵗ"
    ],
    answer: 0
  },
  {
    question: "What is the Laplace transform of eᵗ (t - 1)²?",
    options: [
      "2/(s - 1)³ - 2/(s - 1)² + 1/(s - 1)",
      "2/s³ - 2/s² + 1/s",
      "2/(s + 1)³ - 2/(s + 1)² + 1/(s + 1)",
      "2/(s - 1)³ + 2/(s - 1)² + 1/(s - 1)"
    ],
    answer: 0
  },
  {
    question: "The Bessel function of the first kind of order n, Jₙ(x), is defined as:",
    options: [
      "A Fourier series",
      "A power series",
      "A Maclaurin series",
      "A Taylor series"
    ],
    answer: 1
  },
  {
    question: "The Bessel function of order 1/2 is related to which trigonometric function?",
    options: ["sin(x)", "cos(x)", "tan(x)", "sec(x)"],
    answer: 0
  },
  {
    question: "What is the value of Γ(1/2)?",
    options: ["π", "√π", "1", "0"],
    answer: 1
  },
  {
    question: "The Laplace transform of a function is a transformation from the time domain t to the:",
    options: [
      "Frequency domain w",
      "s-domain",
      "z-domain",
      "x-domain"
    ],
    answer: 1
  },
  {
    question: "A vector function is continuous at a point t if its component functions are continuous at that point.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "If r(t)=⟨sin(t),cos(t),t⟩, what is the instantaneous speed ∣v(t)∣?",
    options: [
      "⟨cos(t),−sin(t),1⟩",
      "√(cos²(t) + sin²(t) + 1)",
      "√2",
      "1"
    ],
    answer: 2
  },
  {
    question: "The gradient of a scalar function ϕ is a:",
    options: ["Scalar", "Vector", "Matrix", "Constant"],
    answer: 1
  },
  {
    question: "The divergence of a vector field F is a:",
    options: ["Scalar", "Vector", "Matrix", "Constant"],
    answer: 0
  },
  {
    question: "The curl of a vector field F is a:",
    options: ["Scalar", "Vector", "Matrix", "Constant"],
    answer: 1
  },
  {
    question: "Evaluate the double integral ∬R (x - y)dA where R is the region bounded by y = x² and y = x.",
    options: ["1/12", "1/6", "1/4", "1/3"],
    answer: 0
  },
  {
    question: "What is the value of the surface integral ∬S F⋅dS for the vector field F = xyî + yzĵ + zxk̂ over the surface of the cube with side length 1 in the first octant?",
    options: ["1", "3/2", "2", "3"],
    answer: 1
  },
  {
    question: "Given F = xyî + yzĵ + zxk̂ and a cube with side length 1 in the first octant, what is the value of the volume integral ∭V div(F)dV?",
    options: ["1", "3/2", "2", "3"],
    answer: 1
  },
  {
    question: "What is the Laplace transform of f(t) = e²ᵗ + t³?",
    options: [
      "1/(s - 2) + 6/s⁴",
      "1/(s + 2) + 6/s⁴",
      "1/(s - 2) + 3/s⁴",
      "1/(s - 2) + 6/s³"
    ],
    answer: 0
  },
  {
    question: "Find the inverse Laplace transform of F(s) = s/(s² - 4).",
    options: ["cos(2t)", "sin(2t)", "cosh(2t)", "sinh(2t)"],
    answer: 2
  },
  {
    question: "Find the inverse Laplace transform of F(s) = 2/(s² - 4).",
    options: ["cos(2t)", "sin(2t)", "cosh(2t)", "sinh(2t)"],
    answer: 3
  },
  {
    question: "What is the Laplace transform of the solution to y′′ + y = e⁻ᵗ with y(0)=0 and y′(0)=0?",
    options: [
      "Y(s) = 1/((s² + 1)(s - 1))",
      "Y(s) = 1/((s² + 1)(s + 1))",
      "Y(s) = s/((s² + 1)(s + 1))",
      "Y(s) = s/((s² + 1)(s - 1))"
    ],
    answer: 1
  },
  {
    question: "What is the partial fraction decomposition of Y(s) = 1/((s² + 1)(s + 1))?",
    options: [
      "A/(s + 1) + (Bs + C)/(s² + 1)",
      "A/(s + 1) + B/(s² + 1)",
      "A/(s + 1) + B/(s + 1)",
      "s/(s² + 1) + 1/(s + 1)"
    ],
    answer: 0
  },
  {
    question: "In the partial fraction decomposition of Y(s) = 1/((s² + 1)(s + 1)), what is the value of A?",
    options: ["1/2", "−1/2", "1", "−1"],
    answer: 0
  },
  {
    question: "A vector-valued function is of the form X(t)=x(t)i + y(t)j + z(t)k, where x(t),y(t),z(t) are real-valued functions of a parameter t.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "A space curve C is traced out by a vector-valued function r(t).",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "The definition of the derivative of a vector-valued function is given as a limit.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "What is the derivative of r(t)=⟨cos(2t),sin(2t),t²⟩?",
    options: [
      "⟨−sin(2t),cos(2t),2t⟩",
      "⟨−2sin(2t),2cos(2t),2t⟩",
      "⟨2sin(2t),2cos(2t),2t⟩",
      "⟨−sin(t),cos(t),2t⟩"
    ],
    answer: 1
  },
  {
    question: "If r(t)=⟨eᵗ,e⁻ᵗ⟩ and s(t)=⟨t,t²⟩, what is the derivative of r(t)⋅s(t)?",
    options: [
      "eᵗ + 2te⁻ᵗ",
      "eᵗ - 2te⁻ᵗ",
      "eᵗ(t + 1) - e⁻ᵗ(t² - 2t)",
      "eᵗ(t + 1) + e⁻ᵗ(t² - 2t)"
    ],
    answer: 2
  },
  {
    question: "The gradient of a scalar field is a vector field that points in the direction of the greatest rate of increase of the scalar field.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "What is the divergence of the vector field F=⟨x²y,y²z,z²x⟩?",
    options: [
      "2xy + 2yz + 2zx",
      "2xy + 2yz + z²",
      "2x + 2y + 2z",
      "y² + z² + x²"
    ],
    answer: 0
  },
  {
    question: "What is the curl of the vector field F=⟨x,y,z⟩?",
    options: [
      "⟨0,0,0⟩",
      "⟨1,1,1⟩",
      "⟨x,y,z⟩",
      "⟨1,1,1⟩"
    ],
    answer: 0
  },
  {
    question: "Evaluate the double integral ∫₀¹ ∫₀² (x² + y)dxdy.",
    options: ["10/3", "10", "10/2", "10/4"],
    answer: 0
  },
  {
    question: "Evaluate the triple integral ∭V xyzdV where V is the box defined by 0≤x≤1, 0≤y≤1, and 0≤z≤1.",
    options: ["1/2", "1/4", "1/8", "1"],
    answer: 2
  },
  {
    question: "The Divergence Theorem states ∭V div(F)dV = ∬S F⋅dS.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "What is the value of the surface integral over the cube in the Divergence Theorem example in the MTH 222 SOLUTION-2.pdf?",
    options: ["8", "4", "2", "0"],
    answer: 1
  },
  {
    question: "What is the value of the volume integral of the divergence of F for the Divergence Theorem example in the MTH 222 SOLUTION-2.pdf?",
    options: ["8", "4", "2", "0"],
    answer: 1
  },
  {
    question: "What is the Laplace transform of the function f(t)=cosh(at)?",
    options: [
      "s/(s² - a²)",
      "a/(s² - a²)",
      "s/(s² + a²)",
      "a/(s² + a²)"
    ],
    answer: 0
  },
  {
    question: "What is the Laplace transform of the function f(t)=sinh(at)?",
    options: [
      "s/(s² - a²)",
      "a/(s² - a²)",
      "s/(s² + a²)",
      "a/(s² + a²)"
    ],
    answer: 1
  },
  {
    question: "Find the inverse Laplace transform of F(s)=1/(s(s² + 1)).",
    options: [
      "1 + cos(t)",
      "1 - cos(t)",
      "sin(t) + cos(t)",
      "sin(t) - cos(t)"
    ],
    answer: 1
  },
  {
    question: "What is the Laplace transform of t sin(3t)?",
    options: [
      "6s/(s² + 9)²",
      "3s/(s² + 9)²",
      "(s² - 9)/(s² + 9)²",
      "(s² + 9)/(s² + 9)²"
    ],
    answer: 0
  },
  {
    question: "The Laplace transform of f(t)=t² cos(3t) requires a second derivative of the Laplace transform of cos(3t).",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "What is the Laplace transform of y′(t) if y(0)=0?",
    options: [
      "sY(s)",
      "sY(s) - y(0)",
      "sY(s) + y(0)",
      "Y(s)/s"
    ],
    answer: 0
  },
  {
    question: "The Bessel function Jₙ(x) is a solution to the Bessel differential equation.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "The derivative of the cross product of two vector-valued functions, d/dt (u(t)×v(t)), is given by the product rule.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "The velocity of a particle is the derivative of its position vector with respect to time.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "What is the limit of r(t)=⟨t, sin(t)/t⟩ as t→0?",
    options: ["⟨0,1⟩", "⟨0,0⟩", "⟨1,1⟩", "⟨1,0⟩"],
    answer: 0
  },
  {
    question: "What is the equation for the surface of a paraboloid in cylindrical coordinates?",
    options: ["z = r", "z = r²", "z = θ", "r = z"],
    answer: 1
  },
  {
    question: "A space curve can be parameterized by a single variable, t.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "The gradient of the function ϕ(x,y,z)=x² + y² + z² is:",
    options: [
      "2x + 2y + 2z",
      "⟨2x,2y,2z⟩",
      "2xi + 2yj + 2zk",
      "Both B and C"
    ],
    answer: 3
  },
  {
    question: "The divergence of the vector field F=⟨x²,y²,z²⟩ is:",
    options: [
      "x² + y² + z²",
      "2x + 2y + 2z",
      "⟨2x,2y,2z⟩",
      "2xi + 2yj + 2zk"
    ],
    answer: 1
  },
  {
    question: "The curl of the vector field F=⟨x,y,z⟩ is:",
    options: [
      "⟨0,0,0⟩",
      "0",
      "⟨1,1,1⟩",
      "3"
    ],
    answer: 0
  },
  {
    question: "Evaluate the double integral ∫₀¹ ∫_y^1 x dxdy.",
    options: ["1/6", "1/3", "1/2", "1"],
    answer: 0
  },
  {
    question: "Evaluate the triple integral of xyz over the unit cube.",
    options: ["1/8", "1/4", "1/2", "1"],
    answer: 0
  },
  {
    question: "What is the volume of the region bounded by the planes x=0,y=0,z=0,x=1,y=2,z=3?",
    options: ["1", "2", "3", "6"],
    answer: 3
  },
  {
    question: "Given the vector field F(x,y,z)=xî + yĵ + zk̂ and a sphere of radius 1 centered at the origin, what is the value of the volume integral ∭V div(F)dV?",
    options: ["4π", "3π", "2π", "π"],
    answer: 0
  },
  {
    question: "What is the surface area of a sphere of radius 1?",
    options: ["π", "2π", "3π", "4π"],
    answer: 3
  },
  {
    question: "What is the inverse Laplace transform of F(s)=1/(s² + a²)?",
    options: [
      "sin(at)",
      "(1/a) sin(at)",
      "cos(at)",
      "(1/a) cos(at)"
    ],
    answer: 1
  },
  {
    question: "Find the inverse Laplace transform of F(s)=1/(s² - 9).",
    options: [
      "(1/3) sinh(3t)",
      "sinh(3t)",
      "(1/3) sin(3t)",
      "sin(3t)"
    ],
    answer: 0
  },
  {
    question: "Find the inverse Laplace transform of F(s)=s/(s² - 9).",
    options: [
      "cosh(3t)",
      "sinh(3t)",
      "cos(3t)",
      "sin(3t)"
    ],
    answer: 0
  },
  {
    question: "What is the Laplace transform of y′′(t) with y(0)=1, y′(0)=2?",
    options: [
      "s²Y(s) - s - 2",
      "s²Y(s) + s + 2",
      "s²Y(s) - 1 - 2s",
      "s²Y(s) + 1 + 2s"
    ],
    answer: 0
  },
  {
    question: "The Group B test question and answer.pdf contains a question on the Laplace transform of f(t)=t² - 2t + 1. What is the Laplace transform?",
    options: [
      "2/s³ - 2/s² + 1/s",
      "2/s³ + 2/s² + 1/s",
      "1/s³ - 2/s² + 1/s",
      "2/s³ - 1/s² + 1/s"
    ],
    answer: 0
  },
  {
    question: "A vector field is a function that assigns a vector to each point in space.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "The gradient of a scalar function at a point is a vector that points in the direction of the steepest ascent of the function.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "What is the gradient of ϕ(x,y,z)=x² + y² + z²?",
    options: [
      "2xî + 2yĵ + 2zk̂",
      "xî + yĵ + zk̂",
      "2x + 2y + 2z",
      "x² + y² + z²"
    ],
    answer: 0
  },
  {
    question: "If F=xyî + y²zĵ + xz²k̂, what is div(F)?",
    options: [
      "y + 2yz + z²",
      "x + y² + z²",
      "x + y + z",
      "2xy + 2yz + 2zx"
    ],
    answer: 0
  },
  {
    question: "What is the curl of F=xyî + y²zĵ + xz²k̂?",
    options: [
      "⟨y², −z², x⟩",
      "⟨x, y², z²⟩",
      "⟨y², −z², x⟩",
      "⟨0,0,0⟩"
    ],
    answer: 0
  },
  {
    question: "Evaluate the double integral ∬R xy dA where R is the rectangle 0≤x≤2 and 1≤y≤3.",
    options: ["4", "8", "12", "16"],
    answer: 1
  },
  {
    question: "Evaluate the triple integral ∭V (x + y)dV where V is the box defined by 0≤x≤1, 0≤y≤1, and 0≤z≤1.",
    options: ["1/2", "1", "2", "3/2"],
    answer: 1
  },
  {
    question: "The Laplace transform of tⁿ is given by n!/sⁿ⁺¹.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "Find the Laplace transform of f(t)=t³ + t + 1.",
    options: [
      "6/s⁴ + 1/s² + s",
      "6/s⁴ + 1/s² + 1/s",
      "3/s⁴ + 1/s² + 1/s",
      "6/s³ + 1/s² + 1/s"
    ],
    answer: 1
  },
  {
    question: "What is the inverse Laplace transform of F(s)=1/(s² + 4s + 13)?",
    options: [
      "(1/3) e⁻²ᵗ sin(3t)",
      "e⁻²ᵗ cos(3t)",
      "(1/3) e⁻⁴ᵗ sin(3t)",
      "e⁻⁴ᵗ cos(3t)"
    ],
    answer: 0
  },
  {
    question: "A space curve is a continuous map from a single scalar parameter to a three-dimensional vector.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "The derivative of a vector-valued function is another vector-valued function.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "What is the derivative of r(t)=⟨ln(t), t³, teᵗ⟩?",
    options: [
      "⟨1/t, 3t², eᵗ + teᵗ⟩",
      "⟨t, 3t², eᵗ⟩",
      "⟨1/t, t², eᵗ + t⟩",
      "⟨1/t, 3t², teᵗ⟩"
    ],
    answer: 0
  },
  {
    question: "If ϕ(x,y,z)=x² + y² + z², what is the gradient of ϕ?",
    options: [
      "2x + 2y + 2z",
      "⟨2x,2y,2z⟩",
      "⟨x,y,z⟩",
      "x² + y² + z²"
    ],
    answer: 1
  },
  {
    question: "What is the divergence of F=⟨x², xy, yz⟩?",
    options: [
      "2x + x + y",
      "x + y + z",
      "2x + x + y",
      "2x + x + y"
    ],
    answer: 0
  },
  {
    question: "Evaluate the double integral ∫₀¹ ∫₀¹ (x + y)dxdy.",
    options: ["1/2", "1", "2", "1/4"],
    answer: 1
  },
  {
    question: "Evaluate the triple integral ∭V 1 dV over the region defined by 0≤x≤2, 0≤y≤2, 0≤z≤2.",
    options: ["1", "4", "8", "16"],
    answer: 2
  },
  {
    question: "The Laplace transform of a derivative involves the initial conditions of the function.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "What is the Laplace transform of f(t)=cos(t) + eᵗ?",
    options: [
      "s/(s² + 1) + 1/(s - 1)",
      "s/(s² + 1) + 1/(s + 1)",
      "1/(s² + 1) + 1/(s - 1)",
      "s/(s² - 1) + 1/(s - 1)"
    ],
    answer: 0
  },
  {
    question: "What is the inverse Laplace transform of F(s)=(s + 1)/(s² + 1)?",
    options: [
      "cos(t) + sin(t)",
      "sin(t) + cos(t)",
      "cos(t) + sin(t)",
      "cos(t) + sin(t)"
    ],
    answer: 0
  },
  {
    question: "The Bessel function of order 1/2, J₁/₂(x), can be expressed in terms of sin(x) and a scaling factor.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "What is the general solution to the Bessel differential equation of order n?",
    options: [
      "C₁ Jₙ(x) + C₂ Yₙ(x)",
      "C₁ cos(x) + C₂ sin(x)",
      "C₁ eᵃˣ + C₂ eᵇˣ",
      "C₁ xⁿ + C₂ x⁻ⁿ"
    ],
    answer: 0
  },
  {
    question: "The First Shifting Theorem for Laplace transforms is a useful tool for solving certain types of differential equations.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "What is the inverse Laplace transform of F(s)=1/(s² + 2s + 2)?",
    options: [
      "e⁻ᵗ cos(t)",
      "e⁻ᵗ sin(t)",
      "e⁻²ᵗ cos(t)",
      "e⁻²ᵗ sin(t)"
    ],
    answer: 1
  },
  {
    question: "The Group B test question and answer.pdf contains a question about the Laplace transform of a system of differential equations.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "The document proves that the Laplace transform of tⁿ f(t) is (−1)ⁿ dⁿ/dsⁿ L[f(t)].",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "What is the Laplace transform of t² cos(3t)?",
    options: [
      "2s(s² - 27)/(s² + 9)³",
      "2s(s² + 27)/(s² + 9)³",
      "(s² - 27)/(s² + 9)³",
      "(2s³ + 54s)/(s² + 9)³"
    ],
    answer: 0
  },
  {
    question: "The integral of a vector-valued function is the integral of each of its component functions.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "If r′(t)=⟨cos(t),sin(t),1⟩ and r(0)=⟨1,0,0⟩, what is r(t)?",
    options: [
      "⟨sin(t),−cos(t),t⟩ + ⟨1,0,0⟩",
      "⟨sin(t) + 1,−cos(t) + 1,t⟩",
      "⟨sin(t),−cos(t),t⟩",
      "⟨cos(t),sin(t),1⟩"
    ],
    answer: 0
  },
  {
    question: "The dot product of the velocity vector and acceleration vector is zero if the speed is constant.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "The gradient of a scalar function is a vector field.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "The divergence of a vector field measures the net outward flux per unit volume.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "What is the curl of F=⟨y,z,x⟩?",
    options: [
      "⟨−1,−1,−1⟩",
      "⟨1,1,1⟩",
      "⟨0,0,0⟩",
      "⟨1,1,1⟩"
    ],
    answer: 0
  },
  {
    question: "Evaluate the triple integral of x over the cube 0≤x,y,z≤1.",
    options: ["1/2", "1/4", "1", "2"],
    answer: 0
  },
  {
    question: "The Laplace transform of a step function is non-zero.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "The inverse Laplace transform of F(s)=1/s is:",
    options: ["1", "t", "eᵗ", "δ(t)"],
    answer: 0
  },
  {
    question: "The Laplace transform of t² is 2/s³.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "The Laplace transform of the solution to y′ − y = te⁻ᵗ is given by a partial fraction decomposition.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "The Bessel function Jₙ(x) is a series of which variable?",
    options: ["n", "x", "t", "s"],
    answer: 1
  },
  {
    question: "The Laplace transform is an operator that transforms a function of t to a function of s.",
    options: ["True", "False"],
    answer: 0
  }
];

const questionNav = document.getElementById('question-nav');
const startScreen = document.getElementById('start-screen');
const startQuizBtn = document.getElementById('start-quiz-btn');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const app = document.getElementById('app');
const timerEl = document.getElementById('timer');
const questionNumberEl = document.getElementById('question-number');
const questionTextEl = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const scoreEl = document.getElementById('score');
const resultsList = document.getElementById('results-list');
const retryBtn = document.getElementById('retry-btn');
const customConfirm = document.getElementById('customConfirm');
const confirmYes = document.getElementById('confirmYes');
const confirmNo = document.getElementById('confirmNo');
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Quiz variables
const TOTAL_QUESTIONS = 45;
const TIME_LIMIT = 45 * 60; // in seconds
let selectedQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let timer;
let timeRemaining = TIME_LIMIT;

// Initialize quiz
startQuizBtn.addEventListener('click', () => {
  startScreen.style.display = 'none';
  app.style.display = 'flex';
  initQuiz();
});

function initQuiz() {
  // Shuffle and pick questions
  const shuffled = shuffleArray([...questions]);
  selectedQuestions = shuffled.slice(0, Math.min(TOTAL_QUESTIONS, questions.length));

  currentQuestionIndex = 0;
  userAnswers = new Array(selectedQuestions.length).fill(null);

  timeRemaining = TIME_LIMIT;
  updateTimerDisplay();

  showQuestion();

  prevBtn.disabled = true;
  nextBtn.disabled = false;
  submitBtn.disabled = true;

  quizContainer.style.display = 'flex';
  resultContainer.style.display = 'none';

  startTimer();
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function startTimer() {
  clearInterval(timer);
  timer = setInterval(() => {
    timeRemaining--;
    updateTimerDisplay();
    if (timeRemaining <= 0) {
      clearInterval(timer);
      finishQuiz();
    }
  }, 1000);
}

function updateTimerDisplay() {
  let min = Math.floor(timeRemaining / 60);
  let sec = timeRemaining % 60;
  timerEl.textContent = `Time Left: ${min.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`;
}

function renderQuestionNav() {
  questionNav.innerHTML = '';
  selectedQuestions.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.textContent = i + 1;
    if (userAnswers[i] !== null) btn.classList.add('answered');
    if (i === currentQuestionIndex) btn.classList.add('current');
    btn.addEventListener('click', () => {
      currentQuestionIndex = i;
      showQuestion();
      renderQuestionNav();
    });
    questionNav.appendChild(btn);
  });
}

function showQuestion() {
  const q = selectedQuestions[currentQuestionIndex];
  questionNumberEl.textContent = `Question ${currentQuestionIndex + 1} of ${selectedQuestions.length}`;
  questionTextEl.textContent = q.question;

  optionsContainer.innerHTML = '';

  q.options.forEach((optionText, i) => {
    const optionDiv = document.createElement('div');
    optionDiv.className = 'option';
    optionDiv.textContent = String.fromCharCode(65 + i) + ". " + optionText;
    
    // Add keyboard shortcut badge
    const keyBadge = document.createElement('div');
    keyBadge.className = 'key-badge';
    keyBadge.textContent = String.fromCharCode(65 + i);
    optionDiv.appendChild(keyBadge);

    if(userAnswers[currentQuestionIndex] === i) {
      optionDiv.classList.add('selected');
    }

    optionDiv.addEventListener('click', () => {
      selectOption(i);
    });

    optionsContainer.appendChild(optionDiv);
  });

  prevBtn.disabled = currentQuestionIndex === 0;
  nextBtn.disabled = currentQuestionIndex === selectedQuestions.length - 1;
  submitBtn.disabled = userAnswers[currentQuestionIndex] === null;

  renderQuestionNav();
}

function selectOption(optionIndex) {
  userAnswers[currentQuestionIndex] = optionIndex;
  
  Array.from(optionsContainer.children).forEach((optEl, idx) => {
    optEl.classList.toggle('selected', idx === optionIndex);
  });

  submitBtn.disabled = false;
  renderQuestionNav();
}

// Navigation buttons
prevBtn.addEventListener('click', () => {
  if(currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion();
  }
});

nextBtn.addEventListener('click', () => {
  if(currentQuestionIndex < selectedQuestions.length - 1) {
    currentQuestionIndex++;
    showQuestion();
  }
});

// Submit button shows custom confirmation dialog
submitBtn.addEventListener('click', () => {
  customConfirm.style.display = 'flex';
});

// Confirm dialog buttons
confirmYes.addEventListener('click', () => {
  customConfirm.style.display = 'none';
  finishQuiz();
});

confirmNo.addEventListener('click', () => {
  customConfirm.style.display = 'none';
});

function finishQuiz() {
  clearInterval(timer);
  quizContainer.style.display = 'none';
  resultContainer.style.display = 'flex';

  let correctCount = 0;
  resultsList.innerHTML = '';

  selectedQuestions.forEach((q, idx) => {
    const userAnsIndex = userAnswers[idx];
    const isCorrect = userAnsIndex === q.answer;
    if (isCorrect) correctCount++;

    const userAnswerText = userAnsIndex !== null ? q.options[userAnsIndex] : 'No Answer';
    const correctAnswerText = q.options[q.answer];

    const div = document.createElement('div');
    div.className = 'result-question';
    div.innerHTML = `
      <div><strong>Q${idx + 1}:</strong> ${q.question}</div>
      <div>Your answer: <span class="${isCorrect ? 'correct' : 'wrong'}">${userAnswerText}</span></div>
      ${isCorrect ? '' : `<div>Correct answer: <span class="correct">${correctAnswerText}</span></div>`}
    `;
    resultsList.appendChild(div);
  });

  scoreEl.textContent = `You answered ${correctCount} out of ${selectedQuestions.length} questions correctly.`;
  
  // Add performance comment
  let comment = "";
  const percentage = Math.round((correctCount / selectedQuestions.length) * 100);
  
  if (percentage >= 80) comment = "Excellent work! You have a strong grasp of this material.";
  else if (percentage >= 60) comment = "Good effort! Review the incorrect answers to improve.";
  else comment = "Keep studying! Focus on the topics you missed.";
  
  scoreEl.innerHTML += `<div style="margin-top:10px;font-weight:normal">${comment}</div>`;
}

retryBtn.addEventListener('click', () => {
  initQuiz();
});

// Dark Mode Toggle
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
  // Ignore if focus is on input elements
  if (['INPUT', 'TEXTAREA', 'BUTTON'].includes(document.activeElement.tagName)) {
    return;
  }
  
  const key = e.key.toUpperCase();
  
  // Option selection
  if (key >= 'A' && key <= 'E') {
    const optionIndex = key.charCodeAt(0) - 65;
    const currentOptions = selectedQuestions[currentQuestionIndex]?.options || [];
    
    if (optionIndex < currentOptions.length) {
      selectOption(optionIndex);
    }
  }
  
  // Navigation
  switch(key) {
    case 'P':
      if (!prevBtn.disabled) prevBtn.click();
      break;
    case 'N':
      if (!nextBtn.disabled) nextBtn.click();
      break;
  }
});