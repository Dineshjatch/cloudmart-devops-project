resource "aws_instance" "nexusops_server" {

  ami           = "ami-0f58b397bc5c1f2e8"
  instance_type = var.instance_type
  key_name      = var.key_name

  vpc_security_group_ids = [
    aws_security_group.nexusops_sg.id
  ]

  user_data = file("userdata.sh")

  root_block_device {
    volume_size = 30
    volume_type = "gp3"
  }

  tags = {
    Name = "NexusOps-DevOps-Server"
  }

}