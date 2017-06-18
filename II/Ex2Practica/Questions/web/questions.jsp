<%-- 
    Document   : questions
    Created on : Jun 18, 2017, 9:00:46 AM
    Author     : michaelcw02
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Questions</title>
        <link href="css/stylesheet.css" rel="stylesheet" type="text/css"/>
    </head>
    <body>
        <div class="container">
            <%@include file="header.jspf" %>
            <div class="secondary-header">
                <div class="row">
                    <div class="div-2"><h2>TOPIC: <input type="text" placeholder="Your favorite topic" id="topic"> <button id="searchTopic">SEARCH</button></h2></div>
                </div>
            </div>
        </div>
        <br><br>
        <div class="container">
            <div class="div-2">
                <div class="container">
                    <table class="grid">
                        <thead>
                            <tr>
                                <th>Question</th>
                                <th>Topic</th>
                            </tr>
                        </thead>
                        <tbody id="questions-list">
                            <tr>
                                <td colspan="2" class="text-center">No data to show</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <script src="js/Proxy.js" type="text/javascript"></script>
        <script src="js/loginController.js" type="text/javascript"></script>
        <script src="js/questionController.js" type="text/javascript"></script>
        <script src="js/questionsView.js" type="text/javascript"></script>
    </body>
</html>
