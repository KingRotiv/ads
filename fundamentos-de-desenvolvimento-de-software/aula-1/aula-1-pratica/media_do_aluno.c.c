#include <stdio.h>

int main(void) {
  /*
  1 - Obter notas do aluno
  2 - Calcular média da nota
  3- Verificar se o aluno foi reprovado ou não
  */

  // Declarando variáveis
  float nota1, nota2, media;

  // Obter notas do aluno
  printf("Digite a primeira nota: ");
  scanf("%f", &nota1);
  printf("Digite a segunda nota: ");
  scanf("%f", &nota2);

  // Calculando média
  media = (nota1 + nota2) / 2;

  // Verificando se o aluno foi aprovado ou não
  if (media >= 7)
    printf("Aprovado");
  else
    printf("Reprovado");
}