$(document).ready(function() {

  // Função para buscar todos os usuários
  function buscarUsuarios() {
    $.ajax({
      url: "usuarios.php",
      type: "GET",
      dataType: "json",
      success: function(data) {
        $("#listaUsuarios").empty();
        $.each(data, function(key, value) {
          $("#listaUsuarios").append("<li id='" + value.id + "'>" + value.nome + " - " + value.email + " <button class='editarBtn' data-id='" + value.id + "'>Editar</button> <button class='excluirBtn' data-id='" + value.id + "'>Excluir</button></li>");
        });
      }
    });
  }

  // Inicializa a lista de usuários
  buscarUsuarios();

  // Função para adicionar um usuário
  $("#addBtn").click(function() {
    var nome = $("#nome").val();
    var email = $("#email").val();
    $.ajax({
      url: "usuarios.php",
      type: "POST",
      data: { nome: nome, email: email },
      success: function() {
        $("#nome").val("");
        $("#email").val("");
        buscarUsuarios();
      }
    });
  });

  // Função para excluir um usuário
  $("#listaUsuarios").on("click", ".excluirBtn", function() {
    var id = $(this).attr("data-id");
    $.ajax({
      url: "usuarios.php?id=" + id,
      type: "DELETE",
      success: function() {
        $("#" + id).remove();
      }
    });
  });

  // Função para editar um usuário
  $("#listaUsuarios").on("click", ".editarBtn", function() {
    var id = $(this).attr("data-id");
    var nome = $("#" + id).text().split(" - ")[0];
    var email = $("#" + id).text().split(" - ")[1];
    $("#" + id).html("<input type='text' class='editNome' value='" + nome + "'><input type='email' class='editEmail' value='" + email + "'><button class='salvarBtn' data-id='" + id + "'>Salvar</button>");
  });

  // Função para salvar a edição de um usuário
  $("#listaUsuarios").
