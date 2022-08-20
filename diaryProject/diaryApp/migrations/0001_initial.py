# Generated by Django 4.1 on 2022-08-19 05:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Diary',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('todos', models.TextField(max_length=50, null=True)),
                ('content', models.TextField(max_length=100, null=True)),
                ('diary_created_at', models.DateTimeField(auto_now_add=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Users',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20)),
                ('profile_image', models.ImageField(blank=True, null=True, upload_to='images/profile')),
                ('level', models.IntegerField(null=True)),
                ('user_created_at', models.DateTimeField(auto_now_add=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Likes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('diary_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='likes', to='diaryApp.diary')),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='likes', to='diaryApp.users')),
            ],
        ),
        migrations.AddField(
            model_name='diary',
            name='creator',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='diary', to='diaryApp.users'),
        ),
    ]
