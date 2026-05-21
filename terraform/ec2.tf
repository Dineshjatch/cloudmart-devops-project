resource "aws_instance" "nexusops_server" {

  ami           = "ami-0f58b397bc5c1f2e8"
  instance_type = var.instance_type
  key_name      = var.key_name

  vpc_security_group_ids = [
    aws_security_group.nexusops_sg.id
  ]

  tags = {
    Name = "NexusOps-DevOps-Server"
  }

}