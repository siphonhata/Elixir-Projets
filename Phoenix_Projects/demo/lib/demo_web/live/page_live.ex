defmodule DemoWeb.PageLive do
  use DemoWeb, :live_view

  def mount(_params, _session, socket) do
    {:ok, assign(socket, number: 5)}
  end

  def render(assigns) do
    ~H"""

    <style>
      .box
      {
        margin: auto;
        width: 200px;
        height: 200px;
        padding: 10px;
        border: 5px solid crimson;
      }
      .btn
      {
        border-radius: 5px;
      }



    </style>
    <center><strong>Hello World</strong></center>
    <div class="box">
      <div class="btn">
        <.button phx-click="add">Add</.button><%= @number %>
      </div>
    </div>


    """
  end

  def handle_event("add", _params, socket) do
    {:noreply, assign(socket, number: socket.assigns.number + 1)}
  end

  def handle_event("minus", _params, socket) do
    {:noreply, assign(socket, number: socket.assigns.number + 1)}
  end
end
