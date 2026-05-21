resource "aws_eip" "nexusops_eip" {

  instance = aws_instance.nexusops_server.id

}