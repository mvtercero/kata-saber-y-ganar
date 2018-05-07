/* TO DO - list
*
*   velocidad de respuesta, acierto o fallo,
*
*      Si acierto pregunta en menos de 2 segundos - sumo 2 puntos
*          (0 puntos, pregunta correcta, 1 segundo) -> 2 puntos
*          (2 puntos, correcta, 1 segundo) -> 4 puntos
*      Si fallo pregunta en mas de 10 segundos - resto 2 puntos
            (5 puntos, incorrecta, 12 segundos) -> 2 puntos

*      Si acierto pregunta entre 2 y 10 segundos - sumo 1 punto
            (1 punto, correcta, 5 segundos) -> 2 puntos
*      Si acierto y tardo mas de 10 segundos - 0 puntos
            (2 puntos, correcta, 15 segundos) -> 2 puntos*
*      Si fallo antes de 10 segundos - resto 1 punto
            (3 puntos, incorrecta, 8 segundos) -> 2 puntos

*      No se puede pasar sin responder
*      Si en 20 segundos no has respondido , pasa a siguiente pregunta y pierdes 3 punto
*
*
* */


describe("recalcular marcador", function() {
    
    function recalcularMarcadorAcertando(marcador, tiempo) {
        if (tiempo <= 2){
            return marcador + 2;
        } if (tiempo <= 10) {
            return marcador + 1;
        } if (tiempo >10 && tiempo<=20) {
            return marcador;
        }
    }
    
    function recalcularMarcadorFallando(marcador, tiempo) {
        if (tiempo >10 && tiempo<=20) {
            return marcador -2;
        } if(tiempo <=10) {
            return marcador -1;
        }
    }
    
    function recalcularSinRespuesta(marcador) {
        return marcador -3;
    }
    
        it("suma mas puntos si acierta muy rapido", function(){
            expect(recalcularMarcadorAcertando(0, 1)).toBe(2);
            expect(recalcularMarcadorAcertando(2, 1)).toBe(4);
            expect(recalcularMarcadorAcertando(4, 5)).toBe(5);
            expect(recalcularMarcadorAcertando(5, 15)).toBe(5);
        });
    
        it("resta puntos si fallo muy despacio", function() {
            expect(recalcularMarcadorFallando(5, 12)).toBe(3);
            expect(recalcularMarcadorFallando(3,  8)).toBe(2);
        });
        it("no contestar a la pregunta", function() {
            expect(recalcularSinRespuesta(6, 23)).toBe(3);
        });
    });

/* TO DO - list
    Si el usuario dice c la respuesta es correcta - true
    Si el usuario dice a la respuesta es incorrecta - false
    Si el usuario dice b la respuesta es incorrecta - false
    Si el usuario escribe 'Madrid' la respuesta es incorrecta -false
    Si el usuario escribe un número la respuesta es incorrecta -false
* */

describe("The scoreboard", function(){
    
    it("compares correctAnswer and userAnswer", function(){
      userAnswer = fullQuestionData[0].answers[1].id;
      expect(isCorrect(1, correctAnswer, userAnswer)).toBe(false);
      userAnswer = fullQuestionData[0].answers[0].id;
      expect(isCorrect(1, correctAnswer, userAnswer)).toBe(true);
      userAnswer = fullQuestionData[2].answers[1].id;
      expect(isCorrect(3, correctAnswer, userAnswer)).toBe(false);
    
    });
    });

